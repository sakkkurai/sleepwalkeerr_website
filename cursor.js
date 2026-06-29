const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    // 1. Получаем значение переменной --accent прямо из :root CSS
    const rootStyles = window.getComputedStyle(document.documentElement);
    const accentHex = rootStyles.getPropertyValue('--accent').trim();

    // 2. Функция-помощник, которая переводит Hex (#e63946) в формат RGB для точного сравнения
    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
        return result
            ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
            : null;
    }

    const accentRGB = hexToRgb(accentHex);

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);

        if (elementUnderCursor) {
            let currentEl = elementUnderCursor;
            let currentBg = '';

            while (currentEl && currentEl !== document.documentElement) {
                const computedBg = window.getComputedStyle(currentEl).backgroundColor;
                if (computedBg !== 'rgba(0, 0, 0, 0)' && computedBg !== 'transparent') {
                    currentBg = computedBg;
                    break;
                }
                currentEl = currentEl.parentElement;
            }

            if (currentBg === accentRGB) {
                cursor.classList.add('is-inverted');
            } else {
                cursor.classList.remove('is-inverted');
            }
        }
    });
});

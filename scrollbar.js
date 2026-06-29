const thumb = document.querySelector('.scrollbar-thumb');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const percent = (scrolled / total) * 100;
    thumb.style.height = percent + '%';
});

const photos = [
    'src/photos/photo1.jpg',
    'src/photos/photo2.jpg',
    'src/photos/photo3.jpg',
    'src/photos/photo4.jpg',
    'src/photos/photo5.jpg',
    'src/photos/photo6.jpg',
    'src/photos/photo7.jpg',
    'src/photos/photo8.jpg',
    'src/photos/photo9.jpg',
    'src/photos/photo10.jpg',
];

const sizes = ['small', 'medium', 'large'];

const grid = document.querySelector('#gallery-grid');

photos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = sizes[Math.floor(Math.random() * sizes.length)];
    grid.appendChild(img);
});

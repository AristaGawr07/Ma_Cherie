// Array con los IDs de las imágenes de Google Drive
const driveImageIds = [
    '14QYvE5g32pzUBkBbTfSKrQU9Kfm6dnXH',
    '14QnW74nMItiTg8ZFF7WtdLyxLugugrlT'
];

// Generamos las URLs de Google Drive correctamente
const imageUrls = driveImageIds.map(id => 
    `https://drive.google.com/uc?export=view&id=${id}`
);

// Variables para controlar el ciclo de imágenes
let currentImageIndex = 0;
const imageContainer = document.getElementById('imageContainer');
const expandedImage = document.getElementById('expandedImage');
const closeBtn = document.getElementById('closeBtn');

// Función para mostrar la imagen actual
function showCurrentImage() {
    if (imageUrls.length === 0) {
        console.error('No hay URLs de imágenes definidas');
        return;
    }

    const url = imageUrls[currentImageIndex];
    expandedImage.onload = function() {
        imageContainer.classList.add('active');
    };
    expandedImage.onerror = function() {
        console.error('Error al cargar la imagen:', url);
        advanceToNextImage();
    };
    expandedImage.src = url;
    
    setTimeout(() => {
        if (imageContainer.classList.contains('active')) {
            imageContainer.classList.remove('active');
            setTimeout(advanceToNextImage, 2000);
        }
    }, 15000);
}

// Función para avanzar a la siguiente imagen
function advanceToNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    showCurrentImage();
}

// Evento para cerrar la imagen manualmente
closeBtn.addEventListener('click', () => {
    imageContainer.classList.remove('active');
    setTimeout(advanceToNextImage, 1000);
});

// Animaciones iniciales
setTimeout(() => {
    document.querySelector('.initial-message').style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
        document.querySelector('.initial-message').style.display = 'none';
    }, 1000);
}, 3000);

setTimeout(() => {
    document.querySelector('.main-message').classList.remove('hidden');
}, 4000);

// Cambiar el color de fondo gradualmente
let hue = 0;
setInterval(() => {
    hue = (hue + 0.5) % 360;
    document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 100%, 95%) 0%, hsl(${hue}, 100%, 90%) 100%)`;
}, 100);

// Iniciar el ciclo de imágenes después de que se complete la animación inicial
setTimeout(() => {
    if (imageUrls.length > 0) {
        showCurrentImage();
    } else {
        console.log('No hay imágenes para mostrar');
    }
}, 6000);
// Índice de la imagen actual
let currentIndex = 0;

// Seleccionamos el contenedor que agrupa todas las imágenes
const carouselImages = document.querySelector('.carousel-images');
// Obtenemos la lista de imágenes
const images = document.querySelectorAll('.carousel-images img');
// Cantidad total de imágenes
const totalImages = images.length;

// Función para actualizar la posición del carrusel
function updateCarousel() {
  // Calculamos el desplazamiento en función del ancho del contenedor
  // Como cada imagen ocupa el 100% del contenedor, usamos clientWidth
  const width = carouselImages.clientWidth;
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Función para pasar a la siguiente imagen
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

// Cambio automático cada 5 segundos (5000 milisegundos)
// Puedes ajustar el intervalo si lo deseas
setInterval(nextImage, 5000);

// Ajustamos la posición del carrusel si se redimensiona la ventana
window.addEventListener('resize', updateCarousel);

// Inicialización: mostrar la primera imagen
updateCarousel();

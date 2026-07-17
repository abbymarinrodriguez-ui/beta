let index = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide() {
  slides.forEach((img, i) => {
    img.classList.remove('active');
  });
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

// Mostrar la primera imagen al cargar
showSlide();

// Cambiar cada 3 segundos
setInterval(showSlide, 3000);
window.onload = function () {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
};

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
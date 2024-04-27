/*********
Autor: EWebik
web: https://ewebik.com.mx
**********/
(function () {
    AOS.init();
}());
// Si usas Bootstrap, asegúrate de que el JavaScript de Bootstrap esté cargado antes de ejecutar este código.

// Añadir clase 'overlay-link' a cada elemento <a> con la clase 'overlay-link'
document.querySelectorAll('.col-md-4 a').forEach(link => {
    link.classList.add('overlay-link');
});

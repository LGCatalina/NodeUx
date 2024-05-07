// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

    dropdownItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Eliminar la clase 'active' de todos los elementos
            dropdownItems.forEach(function(dropdownItem) {
                dropdownItem.classList.remove("active");
            });

            // Agregar la clase 'active' al elemento clicado
            item.classList.add("active");
        });
    });
});

function mostrarImagen(nombreImagen) {
    // Obtener el elemento donde se mostrará la imagen
    var imagenMostrada = document.getElementById("imagenMostrada");
    // Cambiar la imagen que se muestra
    imagenMostrada.innerHTML = "<img src='" + nombreImagen + "' style='max-width: 100%;'>";
}

function ocultarImagen() {
    // Obtener el elemento donde se muestra la imagen
    var imagenMostrada = document.getElementById("imagenMostrada");
    // Limpiar el contenido para ocultar la imagen
    imagenMostrada.innerHTML = "";
}
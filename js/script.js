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
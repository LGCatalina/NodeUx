document.getElementById("bock_click1").addEventListener("click", function() {
    var contenidoManipulacion = document.getElementById("contenido-1");

    // Verificar el estado actual del contenido de manipulación
    if (contenidoManipulacion.style.display === "flex") {
        // Si está visible, ocultarlo
        contenidoManipulacion.style.display = "none";
    } else {
        // Si está oculto, mostrarlo
        contenidoManipulacion.style.display = "flex";
    }

});
document.getElementById("bock_click2").addEventListener("click", function() {
    var contenidoEmocional = document.getElementById("contenido-2");

    // Verificar el estado actual del contenido emocional
    if (contenidoEmocional.style.display === "flex") {
        // Si está visible, ocultarlo
        contenidoEmocional.style.display = "none";
    } else {
        // Si está oculto, mostrarlo
        contenidoEmocional.style.display = "flex";
    }
});
document.getElementById("bock_click3").addEventListener("click", function() {
    var contenidoEmocional = document.getElementById("contenido-3");

    // Verificar el estado actual del contenido emocional
    if (contenidoEmocional.style.display === "flex") {
        // Si está visible, ocultarlo
        contenidoEmocional.style.display = "none";
    } else {
        // Si está oculto, mostrarlo
        contenidoEmocional.style.display = "flex";
    }
});
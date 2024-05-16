document.addEventListener('DOMContentLoaded', function() {
    // Agrega un evento clic al título "MANIPULACIÓN"
    document.getElementById('titulo-manipulacion').addEventListener('click', function() {
        // Obtiene el contenido asociado
        var contenido = document.getElementById('contenido-manipulacion');
        // Alterna la clase 'oculto' para mostrar u ocultar el contenido
        contenido.classList.toggle('oculto');
    });
});

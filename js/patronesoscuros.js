// Función para mostrar/ocultar contenido
function toggleContent(event) {
    var contentId = event.currentTarget.getAttribute('data-target');
    var contentElement = document.getElementById(contentId);

    // Mostrar el contenido actual si estaba oculto
    if (contentElement.style.display === 'none' || contentElement.style.display === '') {
        contentElement.style.display = 'block';
    }else{
        if (contentElement.style.display === 'block' || contentElement.style.display === '') {
            contentElement.style.display = 'none';
        }
    }
}

// Agregar eventos a todos los botones de clic
document.querySelectorAll("[id^='bock_click']").forEach(function(button) {
    button.addEventListener("click", toggleContent);
});

function showAlert() {
    alert("Tendras 7 años de mala suerte");
}
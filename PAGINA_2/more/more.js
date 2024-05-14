document.addEventListener("DOMContentLoaded", function() {
    fetch("/PAGINA_2/more/more.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("more").innerHTML = data;
        });
});

// Función para mostrar más información
function showMore() {
    // Aquí puedes agregar más información o cargarla desde una fuente externa
    alert("¡Has caído en un patrón oscuro! Su categoría es obstrucción del flujo de navegación, este patrón crea obstáculos que dificultan realizar cierta opciones como lo hace el botón de (leer más).");
}
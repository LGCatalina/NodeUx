// Función para mostrar el mensaje al intentar salir de la página
window.onbeforeunload = function() {
    return "¿Estás seguro de que quieres abandonar esta página?";
};
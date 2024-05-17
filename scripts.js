

// Función para mostrar la alerta de bendición después de 5 segundos
setTimeout(function() {
    alert("Envía esto a tus amigos y en 5 minutos recibirás una bendición. PD: No lo ignores o tendrás 7 años de mala suerte.");
}, 5000);

// Función para mostrar el mensaje al intentar salir de la página
window.onbeforeunload = function() {
    return "¿Estás seguro de que quieres abandonar esta página?";
};
// Función para mostrar la alerta de oferta cuando el usuario desplaza hacia abajo la página
window.addEventListener('scroll', function() {
    if (window.scrollY > 100 && !ofertaMostrada) {
                alert("¡Oferta especial! Suscríbete ahora y obtén un 50% de descuento en tu primer mes.");
        ofertaMostrada = true;
    }
});

// Función para mostrar la alerta de bendición después de 5 segundos
setTimeout(function() {
    alert("Envía esto a tus amigos y en 5 minutos recibirás una bendición. PD: No lo ignores o tendrás 7 años de mala suerte.");
}, 5000);

// Función para mostrar el mensaje al intentar salir de la página
window.onbeforeunload = function() {
    return "¿Estás seguro de que quieres abandonar esta página?";
};
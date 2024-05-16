document.addEventListener("DOMContentLoaded", function() {
    fetch("/cookie/cookie.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("cookie").innerHTML = data;
        });
});

// Función para aceptar cookies
function acceptCookies() {
    // Aquí puedes agregar el código para aceptar las cookies
    alert("Cookies aceptadas. ¡Gracias por tu consentimiento!");
    // Ocultar la barra de cookies
    document.querySelector('.cookie-bar').style.display = 'none';
    // Mostrar la tarjeta de términos y condiciones después de aceptar las cookies
    document.getElementById('termsCard').style.display = 'block';
}

// Función para aceptar términos y condiciones
function acceptTerms() {
    alert("Términos y condiciones aceptados. ¡Bienvenido a nuestro servicio!");
    // Ocultar la tarjeta de términos y condiciones después de aceptar
    document.getElementById('termsCard').style.display = 'none';
}
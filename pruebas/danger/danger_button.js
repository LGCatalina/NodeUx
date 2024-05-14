document.addEventListener("DOMContentLoaded", function() {
    fetch("/danger/danger_button.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("danger_button").innerHTML = data;
        });
});

// Variable para controlar si la alerta de oferta ya se mostró
var ofertaMostrada = false;

// Función para mostrar la tarjeta al hacer clic en el botón de peligro
function showHelpCard() {
    document.getElementById('helpCard').style.display = 'block';
}

// Función para ocultar la tarjeta al hacer clic en el botón de cerrar
function hideHelpCard() {
    document.getElementById('helpCard').style.display = 'none';
}

// Función para aceptar términos y condiciones
function acceptTerms() {
    alert("Términos y condiciones aceptados. ¡Bienvenido a nuestro servicio!");
    // Ocultar la tarjeta de términos y condiciones después de aceptar
    document.getElementById('termsCard').style.display = 'none';
}
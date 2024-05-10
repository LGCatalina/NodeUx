// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("/PAGINA_1/nav/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
        });
});
// footer.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("/PAGINA_2/footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });
});
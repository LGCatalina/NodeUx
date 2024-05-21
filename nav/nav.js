// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("nav/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("nav/nav2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav2").innerHTML = data;
        });
});
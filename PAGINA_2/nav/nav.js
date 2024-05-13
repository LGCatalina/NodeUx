// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("/PAGINA_2/nav/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav").innerHTML = data;
        });
});

/*
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});
*/
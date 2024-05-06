// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

    dropdownItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Eliminar la clase 'active' de todos los elementos
            dropdownItems.forEach(function(dropdownItem) {
                dropdownItem.classList.remove("active");
            });

            // Agregar la clase 'active' al elemento clicado
            item.classList.add("active");
        });
    });
});

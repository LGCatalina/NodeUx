// Función para mostrar el contenido de Patrones
function mostrarPatrones() {
    document.getElementById("container_principal").innerHTML = 
    `<div class="container text-center" style="min-height: 100vh;" id="container_principal">
        <div class="row" id="row_1">
            <div class="col">
                <div class="rectangulo" id="circulo_blanco">
                    <p>PATRONES</p>
                </div>
            </div>
            <div class="col">
                <div class="rectangulo" id="circulo_bordes">
                    <p>DISEÑO</p>
                </div>
            </div>
            <div class="col">
                <div class="rectangulo" id="circulo_bordes">
                    <p>DARK PATTERNS</p>
                </div>
            </div>
        </div>
        <div class="row" id="row_2">
            <div class="col">
                <div class="rectangulo" id="circulo_blanco">
                    <p>UI</p>
                </div>
            </div>
            <div class="col">
                <div class="rectangulo" id="circulo_bordes">
                    <p>UX</p>
                </div>
            </div>
            <div class="col">
                <div class="circle" id="circle_6"></div>
            </div>  
        </div>    
    </div>`;
}

// Funciones para mostrar otros contenidos similares a mostrarPatrones()
function mostrarDiseno() {
    // Implementa aquí la lógica para mostrar el contenido de diseño
}

function mostrarDarkPatterns() {
    // Implementa aquí la lógica para mostrar el contenido de patrones oscuros
}

function mostrarUI() {
    // Implementa aquí la lógica para mostrar el contenido de UI
}

function mostrarUX() {
    // Implementa aquí la lógica para mostrar el contenido de UX
}

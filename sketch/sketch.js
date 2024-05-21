let rects = [];
let connections = [];

function setup() {
    // Crear el canvas y asignarlo a un contenedor específico
    let canvas = createCanvas(800, 600);
    canvas.parent('p5-container'); // Asignar el canvas al div con ID 'p5-container'
    textSize(18);
    rectMode(CENTER);

    // Crear rectángulos con texto
    rects.push(new RectWithText(100, 100, 120, 60, "UI"));
    rects.push(new RectWithText(300, 100, 120, 60, "DISEÑO"));
    rects.push(new RectWithText(500, 100, 120, 60, "UX"));
    rects.push(new RectWithText(100, 300, 120, 60, "PATRONES\nOSCUROS"));
    rects.push(new RectWithText(300, 300, 120, 60, "PATRONES"));
    rects.push(new RectWithText(500, 300, 120, 60, "CAMPO\nLABORAL"));

    // Definir conexiones preseleccionadas (índices de rects)
    connections.push([0, 1]); // Conectar Rect 1 con Rect 2
    connections.push([0, 3]); // Conectar Rect 1 con Rect 4
    connections.push([0, 4]); // Conectar Rect 1 con Rect 5
    connections.push([0, 5]); // Conectar Rect 1 con Rect 6
    connections.push([1, 2]); // Conectar Rect 2 con Rect 3
    connections.push([1, 3]); // Conectar Rect 2 con Rect 4
    connections.push([1, 4]); // Conectar Rect 2 con Rect 5
    connections.push([1, 5]); // Conectar Rect 2 con Rect 6
    connections.push([2, 4]); // Conectar Rect 3 con Rect 5
    connections.push([2, 5]); // Conectar Rect 3 con Rect 6
    connections.push([3, 4]); // Conectar Rect 4 con Rect 5
    connections.push([3, 5]); // Conectar Rect 4 con Rect 6
}

function draw() {
    clear();

    // Actualizar estado de hover para cada rectángulo
    for (let rect of rects) {
        rect.updateHoverState();
    }

    // Dibujar líneas entre los rectángulos seleccionados o en hover
    stroke(0); // Cambiar el color de trazo a blanco
    strokeWeight(2);
    for (let rect of rects) {
        if (rect.selected || rect.hover) {
            for (let conn of connections) {
                let rectA = rects[conn[0]];
                let rectB = rects[conn[1]];
                // Comprobar si el rectángulo actual es "CAMPO LABORAL"
                if (rect.text === "CAMPO\nLABORAL") {
                    // Solo conectar con "UI", "DISEÑO" y "UX"
                    if ((rectA === rect && (rectB.text === "UI" || rectB.text === "DISEÑO" || rectB.text === "UX")) ||
                        (rectB === rect && (rectA.text === "UI" || rectA.text === "DISEÑO" || rectA.text === "UX"))) {
                        line(rectA.x, rectA.y, rectB.x, rectB.y);
                    }
                } else {
                    // Conectar cualquier otro rectángulo
                    if (rectA === rect || rectB === rect) {
                        line(rectA.x, rectA.y, rectB.x, rectB.y);
                    }
                }
            }
        }
    }

    // Dibujar rectángulos
    for (let rect of rects) {
        rect.display();
    }
}

function mousePressed() {
    for (let rect of rects) {
        if (rect.isMouseOver()) {
            rect.toggleSelection();
        }
    }
}

class RectWithText {
    constructor(x, y, w, h, text, bgColor = [163, 212, 210], textColor = [14, 23, 32], borderRadius = 40) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.bgColor = bgColor; // Color de fondo del rectángulo
        this.textColor = textColor; // Color del texto
        this.borderRadius = borderRadius; // Radio del borde del rectángulo
        this.selected = false;
        this.hover = false; // Estado de hover
    }

    display() {
        fill(this.bgColor); // Color del rectángulo
        rect(this.x, this.y, this.w, this.h, this.borderRadius); // Radio del borde
        fill(this.textColor); // Color del texto
        textAlign(CENTER, CENTER);
        text(this.text, this.x, this.y); // Coordenadas centradas
    }

    isMouseOver() {
        return mouseX > this.x - this.w / 2 &&
               mouseX < this.x + this.w / 2 &&
               mouseY > this.y - this.h / 2 &&
               mouseY < this.y + this.h / 2;
    }

    toggleSelection() {
        this.selected = !this.selected;
    }

    updateHoverState() {
        this.hover = this.isMouseOver();
    }
}

function windowResized() {
    // Ajustar el tamaño del canvas cuando se redimensiona la ventana
    let container = document.getElementById('p5-container');
    resizeCanvas(container.offsetWidth, container.offsetHeight);
}

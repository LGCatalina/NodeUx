let rects = [];
let connections = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(16);
    rectMode(CENTER);

    // Crear rectángulos con texto
    rects.push(new RectWithText(100, 100, 120, 60, "rectangulo_1"));
    rects.push(new RectWithText(300, 100, 120, 60, "rectangulo_2"));
    rects.push(new RectWithText(500, 100, 120, 60, "rectangulo_3"));
    rects.push(new RectWithText(100, 300, 120, 60, "rectangulo_4"));
    rects.push(new RectWithText(300, 300, 120, 60, "rectangulo_5"));
    rects.push(new RectWithText(500, 300, 120, 60, "rectangulo_6"));

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
    connections.push([2, 5]); // Conectar Rect 3 con Rect 5
  
    connections.push([3, 4]); // Conectar Rect 4 con Rect 5
    connections.push([3, 5]); // Conectar Rect 4 con Rect 6
    
}

function draw() {
    background(240);

    // Dibujar líneas entre los rectángulos seleccionados
    stroke(0);
    strokeWeight(2);
    for (let rect of rects) {
        if (rect.selected) {
            for (let conn of connections) {
                let rectA = rects[conn[0]];
                let rectB = rects[conn[1]];
                if (rectA === rect || rectB === rect) {
                    line(rectA.x, rectA.y, rectB.x, rectB.y);
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
    constructor(x, y, w, h, text) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.selected = false;
    }

    display() {
        if (this.selected) {
            fill(255, 150, 150);
        } else {
            fill(150, 150, 255);
        }
        rect(this.x, this.y, this.w, this.h);
        fill(0);
        noStroke();
        textAlign(CENTER, CENTER);
        text(this.text, this.x, this.y);
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
}


// Función para mostrar la alerta de bendición después de 5 segundos
setTimeout(function() {
    alert("Envía esto a tus amigos y en 5 minutos recibirás una bendición. PD: No lo ignores o tendrás 7 años de mala suerte.");
}, 5000);

// Función para mostrar el mensaje al intentar salir de la página
window.onbeforeunload = function() {
    return "¿Estás seguro de que quieres abandonar esta página?";
};
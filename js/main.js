// Obtener una referencia al elemento <canvas> del documento HTML
let canvas = document.getElementById("canvas"); 

// Obtener el contexto de renderizado 2D del canvas
let ctx = canvas.getContext("2d"); 

// Establecer el color de relleno en rojo
ctx.fillStyle = "rgb(40, 106, 128)"; 

// Dibujar un rectángulo relleno en la posición (50, 50) con un ancho y alto de 100 píxeles
ctx.fillRect(20, 20, 100, 100);

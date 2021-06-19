const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.height = 600;
canvas.width = 1200;

ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';


let painting = false;



function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}



function mouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
    if (painting === false) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function mouseDown(event) {
    painting = true;
}
function mouseUp(event){
    stopPainting();
}

if (canvas) {
    canvas.addEventListener('mousemove', mouseMove)
    canvas.addEventListener('mousedown', mouseDown)
    canvas.addEventListener('mouseup', mouseUp)
    canvas.addEventListener('mouseleave',stopPainting())
}
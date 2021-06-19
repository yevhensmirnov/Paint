const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting() {
    painting = false;
}

if (canvas) {
    canvas.addEventListener('mousemove', mouseMove)
    canvas.addEventListener('mousedown', mouseDown)
    canvas.addEventListener('mouseup', mouseUp)
    canvas.addEventListener('mouseleave',stopPainting())
}
function mouseMove(e) {
    x = e.offsetX;
    y = e.offsetY;
    console.log(x,y)
}
function mouseDown(e) {
    painting = true;
    console.log(e)
}
function mouseUp(e) {
    stopPainting()
}

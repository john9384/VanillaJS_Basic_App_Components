const color_input = document.querySelector("#color-picker");
const brush_paint = document.querySelector("#paint")
const brush_erase = document.querySelector("#erase")
    //const brush_width = document.querySelector("#brush-width")
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "black";
ctx.lineJoin = 'round'
ctx.lineCap = 'round';
ctx.lineWidth;

let brushActive;
let isDrawing = false;
let endX = 0;
let endY = 0;

brush_paint.addEventListener("click", () => {
    if (canvas.classList.contains("eraser")) canvas.classList.remove("eraser");
    canvas.classList.add("painter");
    brushActive = true;
})
brush_erase.addEventListener("click", () => {
    if (canvas.classList.contains("painter")) canvas.classList.remove("painter");
    canvas.classList.add("eraser");
    brushActive = false
})

function paint(e) {
    if (!isDrawing) return;
    if (brushActive) {
        ctx.lineWidth = document.querySelector("#brush-width").value;
        ctx.strokeStyle = color_input.value;
        ctx.beginPath()
        ctx.moveTo(endX, endY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        endX = e.offsetX;
        endY = e.offsetY
    } else {
        ctx.lineWidth = document.querySelector("#brush-width").value;
        ctx.strokeStyle = "white"
        ctx.beginPath()
        ctx.moveTo(endX, endY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        endX = e.offsetX;
        endY = e.offsetY
    }

}

function erase(e) {
    if (!isDrawing) return;

}
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    endX = e.offsetX;
    endY = e.offsetY;
})
canvas.addEventListener('mousemove', paint);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
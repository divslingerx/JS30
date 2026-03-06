const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 10;
context.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (context.lineWidth >= 5 || context.lineWidth <= 1) {
    direction = !direction;
  }
  direction ? context.lineWidth++ : context.lineWidth--;
};

canvas.addEventListener('mousedown', (e) => {
  [lastX, lastY] = [e.offsetX, e.offsetY];
  isDrawing = true;
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

const clear = document.querySelector('button');
clear.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

const canvas = document.getElementById('editorCanvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text-input');
const textInputField = document.getElementById('text');
const fontInput = document.getElementById('font');
const fontSizeInput = document.getElementById('fontSize');
const colorInput = document.getElementById('color');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');

let history = [];
let currentIndex = -1;

canvas.addEventListener('click', function (e) {
  const x = e.clientX - canvas.getBoundingClientRect().left;
  const y = e.clientY - canvas.getBoundingClientRect().top;
  showTextInput(x, y);
});

function showTextInput(x, y) {
  textInput.style.display = 'block';
  textInput.style.left = x + 'px';
  textInput.style.top = y + 'px';
}

function applyText() {
  const text = textInputField.value;
  const font = fontInput.value;
  const fontSize = parseInt(fontSizeInput.value);
  const color = colorInput.value;

  ctx.font = `${fontSize}px ${font}`;
  ctx.fillStyle = color;
  ctx.fillText(text, parseFloat(textInput.style.left), parseFloat(textInput.style.top));

  history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  currentIndex++;

  textInput.style.display = 'none';
  textInputField.value = '';
}

// function undo() {
//   if (currentIndex > 0) {
//     currentIndex--;
//     ctx.putImageData(history[currentIndex], 0, 0);
//   }
// }

// function redo() {
//   if (currentIndex < history.length - 1) {
//     currentIndex++;
//     ctx.putImageData(history[currentIndex], 0, 0);
//   }
// }
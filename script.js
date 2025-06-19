const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#1abc9c', '#f39c12', '#2ecc71'];
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = '#333';
  }, 1000); // 1 second delay
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

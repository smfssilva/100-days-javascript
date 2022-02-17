

function generateColor() {
  let color = Math.random()
  const span = document.querySelector('.color');
  color = Math.random().toString(16).substring(2, 8);
  color = `#${color}`;
  span.innerHTML = color
  return color;
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('generate')) {
    document.body.style.backgroundColor = generateColor();
  }
})
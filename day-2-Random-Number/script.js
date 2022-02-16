const num = document.querySelector('.number');

const generateNumber = () => {
  return Math.floor(Math.random() * (11 - 1) + 1);
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('generate')) {
    num.innerHTML = generateNumber();
  }
});

num.innerHTML = generateNumber();

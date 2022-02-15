const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

function changeColor(value) {
  if (value < 0) {
    count.style.color = 'orangered';
  } else if (value > 0) {
    count.style.color = 'yellow';
  } else {
    count.style.color = 'white';
  }
}

buttons.addEventListener('click', (e)=>{
  if (e.target.classList.contains('subtract')) {
    count.innerText--;
  }
  if (e.target.classList.contains('add')) {
    count.innerText++;
  }
  if (e.target.classList.contains('reset')) {
    count.innerText=0;
  }
  changeColor(count.innerText);
})

changeColor(0)
const startBtnEl = document.querySelector('[data-start]');
const stoptBtnEl = document.querySelector('[data-stop]');

startBtnEl.addEventListener('click', startChangeColor);
stoptBtnEl.addEventListener('click', stopChangeColor);

stoptBtnEl.setAttribute('disabled', true);
let changeColorInterval = '';

function startChangeColor() {
  startBtnEl.setAttribute('disabled', true);
  stoptBtnEl.removeAttribute('disabled');
  changeColorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  startBtnEl.removeAttribute('disabled');
  stoptBtnEl.setAttribute('disabled', true);

  clearInterval(changeColorInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

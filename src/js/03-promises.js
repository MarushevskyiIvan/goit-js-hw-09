const formEl = document.querySelector('.form');
const btnEl = document.querySelector('.form button');
const inputEl = document.querySelector('input');

formEl.addEventListener('submit', onFormSubmit);

let delayStep = '';
let amount = '';
let firstDelay = '';

function onFormSubmit(evt) {
  evt.preventDefault();
  let position = 0;
  firstDelay = evt.currentTarget.elements.delay.value;
  delayStep = evt.currentTarget.elements.step.value;
  amount = evt.currentTarget.elements.amount.value;
  delay = Number(firstDelay);
  for (let i = 0; i < amount; i += 1) {
    position += 1;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.warn(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += Number(delayStep);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

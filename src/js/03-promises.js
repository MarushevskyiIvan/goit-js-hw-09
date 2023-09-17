const formEl = document.querySelector('.form');
const btnEl = document.querySelector('.form button');
const inputEl = document.querySelector('input');
console.log(btnEl);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve();
    } else {
      reject();
    }
  });
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
const formData = {};

btnEl.addEventListener('submit', function asa(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const login = form.elements.delay.value;
  console.log('привет');
});

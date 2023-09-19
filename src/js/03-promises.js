const formEl = document.querySelector('.form');
const btnEl = document.querySelector('.form button');
const inputEl = document.querySelector('input');

formEl.addEventListener('submit', onFormSubmit);
let position = 0;
function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = {
    delay: formEl.elements.delay.value,
    step: formEl.elements.step.value,
    amount: formEl.elements.amount.value,
  };
  // console.log(formData);

  const delay = Number(formData.delay) + Number(formData.step);
  console.log(delay);

  const intervalId = setInterval(() => {
    function createPromise(position, delay) {
      if (position === Number(formData.amount)) {
        clearInterval(intervalId);
        return;
      }

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
    position += 1;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, delay);
}

function intervalId() {}

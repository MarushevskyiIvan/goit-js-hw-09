import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const flatpickr = require('flatpickr');

const timeBtnEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

timeBtnEl.addEventListener('click', startTimeInterval);

timeBtnEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      timeBtnEl.removeAttribute('disabled');
    }
  },
};

const datePickr = flatpickr('#datetime-picker', options);

function startTimeInterval() {
  const intervalId = setInterval(() => {
    const timeRelive = datePickr.selectedDates[0] - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeRelive);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);

    if ((days, hours, minutes, seconds === 0)) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

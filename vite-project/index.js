import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';

dayjs().format();
dayjs.extend(duration);

const calculateAge = (formSelector) => {
  const formElements = document.querySelector(formSelector);
  const inputDay = document.getElementById('day');
  const inputMonth = document.getElementById('month');
  const inputYear = document.getElementById('year');
  const outputs = document.querySelectorAll('.output');

  const calculate = () => {
    const today = dayjs();

    const inputDate = dayjs()
      .set('date', inputDay.value)
      .set('month', inputMonth.value - 1)
      .set('year', inputYear.value);

    const test = dayjs.duration(today.diff(inputDate));

    console.log(test);
  };

  formElements.setAttribute('novalidate', '');

  formElements.addEventListener('submit', (e) => {
    e.preventDefault();
    calculate();
  });
};

calculateAge('form');

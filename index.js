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

    const currentAge = dayjs.duration(today.diff(inputDate));

    for (let i = 0; i < outputs.length; i++) {
      if (i === 0) {
        outputs[i].innerHTML = currentAge.$d.years;
      } else if (i === 1) {
        outputs[i].innerHTML = currentAge.$d.months;
      } else {
        outputs[i].innerHTML = currentAge.$d.days;
      }
    }
  };

  formElements.setAttribute('novalidate', '');

  formElements.addEventListener('submit', (e) => {
    e.preventDefault();
    calculate();
  });
};

calculateAge('form');

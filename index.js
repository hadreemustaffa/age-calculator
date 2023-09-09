import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import anime from 'animejs/lib/anime.es.js';

dayjs().format();
dayjs.extend(duration);

const calculateAge = (formSelector) => {
  const formElements = document.querySelector(formSelector);
  const inputs = document.querySelectorAll('input');
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
    const isFuture = inputDate.isAfter(today);

    // - Any field is empty when the form is submitted**
    // - The day number is not between 1-31
    // - The month number is not between 1-12
    // - The year is in the future
    // - The date is invalid e.g. 31/04/1991 (there are 30 days in April)

    for (let i = 0; i < outputs.length; i++) {
      // const validationOptions = [
      //   {
      //     attribute: 'required',
      //     isValid: (input) => input.value !== '',
      //     errorMessage: () => 'This field cannot be empty',
      //   },
      // ];

      const animateNumber = (duration) => {
        anime({
          targets: outputs[i],
          innerHTML: [0, duration],
          round: 1,
          easing: 'easeOutExpo',
          duration: 1250,
        });
      };
      if (i === 0) {
        animateNumber(currentAge.$d.years);
      } else if (i === 1) {
        animateNumber(currentAge.$d.months);
      } else {
        animateNumber(currentAge.$d.days);
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

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import anime from 'animejs/lib/anime.es.js';
import imgUrl from '/icon-arrow.svg?inline';

document.getElementById('submitBtn').src = imgUrl;

dayjs().format();
dayjs.extend(duration);
dayjs.extend(customParseFormat);

const calculateAge = (formSelector) => {
  const formElements = document.querySelector(formSelector);
  const inputDay = document.getElementById('day');
  const inputMonth = document.getElementById('month');
  const inputYear = document.getElementById('year');
  const outputs = document.querySelectorAll('.output');

  const today = dayjs();

  const setInputDate = () => {
    const inputDate = dayjs()
      .set('year', parseInt(inputYear.value))
      .set('month', parseInt(inputMonth.value - 1))
      .set('date', parseInt(inputDay.value));
    const formatInputDate = inputDate.format('YYYY-MM-DD');
    return formatInputDate;
  };

  const getCurrentAge = () => {
    const getDaysInMonth = () => {
      return dayjs(setInputDate()).daysInMonth();
    };
    // manually convert because using dayjs duration with diff
    // does not return correct number of days
    const MILLISECONDS_IN_A_YEAR = 31556926000;
    const MONTHS_IN_A_YEAR = 12;

    let millisecondsOutput = dayjs.duration(today.diff(setInputDate())).$ms;
    let toYear = millisecondsOutput / MILLISECONDS_IN_A_YEAR;
    let toMonth = (toYear % 1) * MONTHS_IN_A_YEAR;
    let toDay = (toMonth % 1) * getDaysInMonth();

    return { day: toDay, month: toMonth, year: toYear };
  };

  const animateNumber = (i, duration) => {
    anime({
      targets: outputs[i],
      innerHTML: [0, duration],
      round: 1,
      easing: 'easeOutExpo',
      duration: 1250,
    });
  };

  // check user's input against the options below for validity
  const validationOptions = [
    {
      attribute: 'data-day',
      isValid: (input) => dayjs(setInputDate()).date() == input.value,
      errorMessage: () => 'Must be a valid date',
    },
    {
      attribute: 'required',
      isValid: () => dayjs().isAfter(dayjs(setInputDate())),
      errorMessage: () => 'Must be in the past',
    },
    {
      attribute: 'data-min',
      isValid: (input) =>
        input.value >= parseInt(input.getAttribute('data-min')),
      errorMessage: () => 'Cannot be zero',
    },
    {
      attribute: 'data-maxDay',
      isValid: (input) =>
        input.value <= parseInt(input.getAttribute('data-maxDay')),
      errorMessage: () => 'Must be a valid day',
    },
    {
      attribute: 'data-maxMonth',
      isValid: (input) =>
        input.value <= parseInt(input.getAttribute('data-maxMonth')),
      errorMessage: () => 'Must be a valid month',
    },
    {
      attribute: 'required',
      isValid: (input) => input.value.trim() !== '',
      errorMessage: () => 'This field cannot be empty',
    },

    {
      attribute: 'required',
      isValid: (input) => input.value.trim() !== '',
      errorMessage: () => 'This field cannot be empty',
    },
  ];

  const validateAllInputs = (inputSelector) => {
    const containers = document.querySelectorAll(inputSelector);

    Array.from(containers).forEach((container) => {
      const input = container.querySelector('input');
      const errorMsg = container.querySelector('.error-message');

      let errorState = false;
      for (const option of validationOptions) {
        if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
          errorMsg.textContent = option.errorMessage();
          container.classList.add('error');
          errorState = true;
        }

        if (!errorState) {
          errorMsg.textContent = '';
          container.classList.remove('error');
        }
      }
    });

    if (
      !containers[0].classList.contains('error') &&
      !containers[1].classList.contains('error') &&
      !containers[2].classList.contains('error')
    ) {
      animateNumber(0, Math.floor(getCurrentAge().year));
      animateNumber(1, Math.floor(getCurrentAge().month));
      animateNumber(2, Math.floor(getCurrentAge().day));
    }
  };

  // disable default browser validation
  formElements.setAttribute('novalidate', '');

  formElements.addEventListener('submit', (e) => {
    e.preventDefault();

    validateAllInputs('.container__input');
  });
};

calculateAge('form');

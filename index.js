import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import anime from 'animejs/lib/anime.es.js';
import imgUrl from '/icon-arrow.svg?inline';

document.getElementById('submitBtn').src = imgUrl;

dayjs().format();
dayjs.extend(duration);

const calculateAge = (formSelector) => {
  const formElements = document.querySelector(formSelector);
  const inputDay = document.getElementById('day');
  const inputMonth = document.getElementById('month');
  const inputYear = document.getElementById('year');
  const outputs = document.querySelectorAll('.output');

  const setInputDate = () => {
    const inputDate = dayjs()
      .set('D', inputDay.value)
      .set('M', inputMonth.value - 1)
      .set('y', inputYear.value);
    return inputDate;
  };

  const today = dayjs();

  const currentAge = () => {
    const getDaysInMonth = () => {
      const formattedInputDate = setInputDate().format('YYYY-MM-DD');
      return dayjs(formattedInputDate).daysInMonth();
    };

    // 1. manually convert because dayjs duration with difference
    // does not return desired output
    let millisecondOutput = dayjs.duration(today.diff(setInputDate())).$ms;
    let toYear = millisecondOutput / 31556926000; // number is total milliseconds in a year
    let toMonth = (toYear % 1) * 12;
    let toDay = (toMonth % 1) * getDaysInMonth();

    return { day: toDay, month: toMonth, year: toYear };
  };

  console.log(currentAge());

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
      attribute: 'min',
      isValid: (input) => input.value >= parseInt(input.min, 10),
      errorMessage: () => 'Must be more than 0',
    },
    {
      attribute: 'data-maxDay',
      isValid: (input) =>
        input.value <= parseInt(input.getAttribute('data-maxDay')),
      errorMessage: () => 'Must be less than 32',
    },
    {
      attribute: 'data-maxMonth',
      isValid: (input) =>
        input.value <= parseInt(input.getAttribute('data-maxMonth')),
      errorMessage: () => 'Must be less than 13',
    },
    {
      attribute: 'required',
      isValid: (input) => input.value.trim() !== '',
      errorMessage: () => 'This field cannot be empty',
    },
  ];

  const validateSingleInput = (inputSelector) => {
    const label = inputSelector.querySelector('label');
    const input = inputSelector.querySelector('input');
    const errorMsg = inputSelector.querySelector('.error-message');

    setInputDate();
    currentAge();

    let errorState = false;
    for (const option of validationOptions) {
      // if the input selected has the attribute in validationOptions and is invalid
      if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
        // set error message to the message in validationOptions
        errorMsg.textContent = option.errorMessage();
        label.classList.add('error');
        input.classList.add('error-container');
        errorState = true;
      }

      if (!errorState) {
        errorMsg.textContent = '';
        label.classList.remove('error');
        input.classList.remove('error-container');
      }
    }
  };

  // disable default browser validation
  formElements.setAttribute('novalidate', '');

  // validate each input on blur event
  Array.from(formElements.elements).forEach((element) => {
    element.addEventListener('blur', (e) => {
      validateSingleInput(e.target.closest('.container__input'));
    });
  });

  // validate all inputs on submit event
  formElements.addEventListener('submit', (e) => {
    e.preventDefault();
    validateAllInputs(formElements);
  });

  // function to select which input group to validate
  const validateAllInputs = (inputToValidate) => {
    const inputs = Array.from(
      inputToValidate.querySelectorAll('.container__input')
    );

    inputs.forEach((inputSelector) => {
      validateSingleInput(inputSelector);
    });

    // if any of the input's label contains 'error' class,
    // do not display output
    if (
      !inputs[0].firstElementChild.classList.contains('error') &&
      !inputs[1].firstElementChild.classList.contains('error') &&
      !inputs[2].firstElementChild.classList.contains('error')
    ) {
      animateNumber(0, Math.floor(currentAge().year));
      animateNumber(1, Math.floor(currentAge().month));
      animateNumber(2, Math.floor(currentAge().day));
    }
  };
};

calculateAge('form');

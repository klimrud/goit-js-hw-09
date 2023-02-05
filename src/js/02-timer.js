 import flatpickr from "flatpickr";
 import "flatpickr/dist/flatpickr.min.css";

const textEl = document.getElementById('datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const dateEl = document.querySelector('#data-days')

console.log(new Date())
// console.log(textEl);
// console.log(btnStart);
// console.log(timerEl);

// const date = new Date();
// console.log(date);

// const preciseTeamMeetingDate = new Dat();
// console.log(preciseTeamMeetingDate);

// ==Напиши скрипт таймера, який здійснює зворотний відлік до певної дати=====
// ==Використовуй бібліотеку flatpickr => кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу=====
//  flatpickr(input#datetime-picker);

// const fp = flatpickr('.textEl', options);
// console.log(fp);

// btnStart.addEventListener("click", onClick);
// function onClick() {}

// const onClick = () => {
//   // setTimeout(() => {
//   //   alert("start");
//   // }, 1000);
// };

 const options = {
    enableTime: true,              //Включает выбор времени
    time_24hr: true,               //Отображает средство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
    defaultDate: new Date(),       //Устанавливает начальную выбранную дату
    minuteIncrement: 1,            //Регулирует шаг ввода минут (включая прокрутку)
    onClose(selectedDates) {       //Функция(и) для запуска при каждом закрытии календаря.
      console.log(selectedDates[0]);
      console.log(options.defaultDate);
      console.log(selectedDates[0] - options.defaultDate)
      if (selectedDates[0] < options.defaultDate){
        alert('Please choose a date future');
        return;
      }
    },
  };
console.log(options);


const calendar = flatpickr('#datetime-picker', options);
console.log(calendar);

const now = Date.now();
console.log(now);

//  начинает с 0, если число меньше двух знаков
function pad(value){
  return String(value).padStart( 2, '0');
}
//  const diff = selectedDates[0] - options.defaultDate
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
   
    // console.log({ days, hours, minutes, seconds })
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


  // timerEl.textContent = `${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;

  // const dateEl = document.querySelector('#data-days')
  // dateEl.textContent = days;
  // dateEl.textContent =  `${days}`
  console.log(dateEl)
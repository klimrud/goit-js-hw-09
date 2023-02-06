 import flatpickr from "flatpickr";
 import "flatpickr/dist/flatpickr.min.css";

const textEl = document.getElementById('datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const hoursEl = document.querySelector('span[data-hours]')
const daysEl = document.querySelector('span[data-days]')
const minutesEl = document.querySelector('span[data-minutes]')
const secondsEl = document.querySelector('span[data-seconds]')
// console.log(new Date())
// console.log(textEl);
// console.log(btnStart);
// console.log(timerEl);

// ==Напиши скрипт таймера, який здійснює зворотний відлік до певної дати=====
// ==Використовуй бібліотеку flatpickr => кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу=====

//  btnStart.addEventListener("click", onClick);
// function onClick() {}


// const onClick = () => {
//   console.log('start');
//   // stopwatch ();
//   // setTimeout(() => {
//   //   alert("start");
//   // }, 1000);
// };

 const options = {
    enableTime: true,              //Включает выбор времени
    time_24hr: true,               //Отображает средство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
    defaultDate: new Date(),       //Устанавливает начальную выбранную дату
    minuteIncrement: 1,            //Регулирует шаг ввода минут (включая прокрутку)
    onClose(selectedDates) { 
      btnStart.disabled = false;
     const timerId = setInterval(() => { 
    
        const dateNow = Date.now();   //Функция(и) для запуска при каждом закрытии календаря.
       let intervalId = new Date(textEl.value) - dateNow;
     const { days, hours, minutes, seconds } = convertMs(intervalId)
       daysEl.textContent = `${days}`;
       hoursEl.textContent = `${hours}`;
       minutesEl.textContent = `${minutes}`;
       secondsEl.textContent = `${seconds}`;
     // console.log(timeComponents);
      // console.log(` ${days}:: ${hours}: ${minutes}: ${seconds}` )
    if(intervalId < 0) {
      clearInterval(timerId);
      daysEl.textContent = `00`;
       hoursEl.textContent = `00`;
       minutesEl.textContent = `00`;
       secondsEl.textContent = `00`;
       btnStart.disabled = true;
    }
    }, 1000);
 
      if (selectedDates[0] < options.defaultDate){
        alert('Please choose a date future');
        return;
      }
    },
  };


const calendar = flatpickr('#datetime-picker', options);
// console.log(calendar);

// const now = Date.now();
//  console.log(now);


//  начинает с 0, если число меньше двух знаков
function addLeadingZero(value){
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
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
   
     //console.log({ days, hours, minutes, seconds })
    return { days, hours, minutes, seconds };
  }
  
  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

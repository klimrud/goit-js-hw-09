//  import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.getElementsByName('delay'),
  stepEl: document.getElementsByName('step'),
  amountEl: document.getElementsByName('amount'),
  btnSubmit : document.querySelector('button'),
};
// console.log(refs);

refs.btnSubmit.addEventListener('click', onSubmit);
  
   function onSubmit(e){
    e.preventDefault();
    // console.log('sos');
    // console.log(refs.delayEl[0].value);
    // console.log(refs.stepEl[0].value);
    // console.log(refs.amountEl[0].value);
    let delay = 0;
     const del = refs.delayEl[0].value;
     const step = refs.stepEl[0].value;
     const amount = refs.amountEl[0].value;

    for (let position = 1; position <= amount; position ++) {
    delay = del + step*(position - 1);
    // console.log(position);
    createPromise( position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  };
  }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
// setTimeout(() => {
  if (shouldResolve) {
    resolve({ position, delay});// Fulfill
   } else {
    reject({ position, delay}); // Reject
   };
// }, delay);
  });
  }

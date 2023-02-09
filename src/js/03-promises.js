//  import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


  const refs = {
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
     const del =  Number(refs.delayEl[0].value); //Первая задержка
     const step =  Number(refs.stepEl[0].value);  // Шаг задержки
     const amount =  Number(refs.amountEl[0].value);  //Количество

    for (let position = 1; position <= amount; position ++) {
    
      delay = del + step*(position - 1);
    //  console.log(position);
    //  console.log(delay);
    createPromise(position, delay)
    .then(({position, delay}) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,
     {
      timeout: 2000,
     }
      );
    })
    .catch(({position, delay}) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,
      {
        timeout: 2000,
       }
      );
    })
   ,delay
    }
   }
   
  //  delay = del + step*(position - 1);
  

  function createPromise(position, delay) {
    // const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3; 
      // console.log(shouldResolve)
 setTimeout(() => {
  if (shouldResolve) {
    // console.log('+')
    resolve({position, delay});// Fulfill
   }else{
    // console.log('-')
    reject({position, delay}); // Reject
   };
 }
  , delay
);
  });
  }

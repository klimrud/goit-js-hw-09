function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]')
// console.log(startEl);
// console.log(stopEl);
// ========================================

let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    // btnStart.disabled = true;
    // btnStop.disabled = false;
    // console.log(`I love async JS!  ${Math.random()}`);
    // console.log(onStartChangeColor())
    onStartChangeColor()
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);

});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
    stopBtn.disabled = true;
  console.log(`Interval with id ${timerId} has stopped!`);
});
// =========================================

// startEl.addEventListener('click', onStartChangeColor);

function onStartChangeColor () {
    const bodyEl = document.body;
    // console.log(bodyEl);
    bodyEl.style.backgroundColor = getRandomHexColor(); 
    console.log(bodyEl.style.backgroundColor);
}
// ('startBtn.addEventListener').click(function(){
//     onStartChangeColor().attr('disabled', true);  //неактивная (если button, или input submit)
//     })




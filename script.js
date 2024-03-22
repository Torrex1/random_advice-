const adviceBtn = document.querySelector('.nextAdviceBtn');
const advice = document.querySelector('.blockMainText');

async function getRandomAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  
  changeAdvice(advice, data.slip.advice);
}

function changeAdvice (currentAdvice, reqAdvice) {
  currentAdvice.textContent = reqAdvice;
}

adviceBtn.addEventListener('click', () => {
  getRandomAdvice();
})








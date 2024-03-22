const adviceBtn = document.querySelector('.nextAdviceBtn');
const advice = document.querySelector('.blockMainText');
const adviceId = document.querySelector('.blockTitle');

async function getRandomAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  
  changeAdviceId(adviceId, data.slip.id)

  changeAdvice(advice, data.slip.advice);
}

function changeAdviceId (currentId, reqId) {
  currentId.textContent = 'advice #' + reqId;
}

function changeAdvice (currentAdvice, reqAdvice) {
  currentAdvice.textContent = reqAdvice;
}

adviceBtn.addEventListener('click', () => {
  getRandomAdvice();
})








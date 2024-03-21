async function getRandomAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();

  handleFetchedData(data.slip);
}

function handleFetchedData (reques) {
  for (const element in reques) {
    console.log(reques[element]);
  }
}

getRandomAdvice();




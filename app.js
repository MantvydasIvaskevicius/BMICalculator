console.log('hello')




const calculateBtn = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');
const resultSpan = document.getElementById('bmiResult');

calculateBtn.addEventListener('click', _ => {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;

  if (!weight || !height) {
    resultSpan.textContent = 'Please enter valid inputs!';
    return;
  }

  const bmi = (weight / (height ** 2)).toFixed(2);
  resultSpan.textContent = bmi;
});

resetBtn.addEventListener('click', _ => {
  document.getElementById('weight').value = '';
  document.getElementById('height').value = '';
  resultSpan.textContent = '-';
});

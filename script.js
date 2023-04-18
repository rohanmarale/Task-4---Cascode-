const calculateBMI = () => {
  const weightInput = document.getElementById('weight');
  const weightUnit = document.getElementById('weight-unit').value;
  const heightInput = document.getElementById('height');
  const heightUnit = document.getElementById('height-unit').value;

  const weight = weightInput.value;
  const height = heightInput.value;

  let bmi = 0;

  if (weight && height) {
    if (weightUnit === 'kg' && heightUnit === 'cm') {
      bmi = weight / ((height/100) ** 2);
    } else if (weightUnit === 'lb' && heightUnit === 'ft') {
      bmi = (weight * 703) / ((height * 12) ** 2);
    } else if (weightUnit === 'kg' && heightUnit === 'm') {
      bmi = weight / (height ** 2);
    } else if (weightUnit === 'lb' && heightUnit === 'in') {
      bmi = (weight * 703) / (height ** 2);
    }

    bmi = bmi.toFixed(2);

    let message = '';
    if (bmi < 18.5) {
      message = 'Underweight';
    } else if (bmi < 25) {
      message = 'Normal';
    } else if (bmi < 30) {
      message = 'Overweight';
    } else {
      message = 'Obese';
    }

    document.getElementById('result').innerHTML = `Your BMI is ${bmi}. You are ${message}.`;
  } else {
    alert('Please enter your weight and height');
  }
};

const calculateButton = document.getElementById('calculate-btn');
calculateButton.addEventListener('click', calculateBMI);

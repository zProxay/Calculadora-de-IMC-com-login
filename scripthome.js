document.getElementById('imcForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  
  if (altura > 0 && peso > 0) {
      const imc = (peso / (altura * altura)).toFixed(2);
      let categoria = '';
      
      if (imc < 18.5) {
          categoria = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc <= 24.9) {
          categoria = 'Peso saudável';
      } else if (imc >= 25 && imc <= 29.9) {
          categoria = 'Sobrepeso';
      } else {
          categoria = 'Obesidade';
      }
      
      document.getElementById('resultado').innerHTML = `Seu IMC é ${imc} (${categoria}).`;
  } else {
      document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos.';
  }
});
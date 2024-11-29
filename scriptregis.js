document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Impede o envio padrão do formulário

      const email = emailField.value;
      const password = passwordField.value;

      if (email && password) {
          // Armazena as credenciais no localStorage
          localStorage.setItem('userEmail', email);
          localStorage.setItem('userPassword', password);

          alert('Conta criada com sucesso! Redirecionando para a página de login.');
          window.location.href = 'index.html'; // Redireciona para a página de login
      } else {
          alert('Por favor, preencha todos os campos.');
      }
  });

  // Redireciona para a página de login ao clicar em "Entrar"
  const registerButton = document.getElementById('registerButton');
  registerButton.addEventListener('click', () => {
      window.location.href = 'index.html';
  });
});

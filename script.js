document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = emailField.value;
        const password = passwordField.value;

        // Recupera as credenciais do localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            // Redireciona para a página inicial
            window.location.href = 'home.html';
        } else {
            alert('Email ou senha incorretos.');
        }
    });

    // Redireciona para a página de registro ao clicar em "Registre-se"
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', () => {
        window.location.href = 'register.html';
    });
});

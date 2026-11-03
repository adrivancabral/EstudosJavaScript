let registerForm = document.querySelector('#registerForm');
let email = document.querySelector('#email');
let emailError = document.querySelector('#emailError');
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!emailPattern.test(email.value)) {
        emailError.innerText = ' Digite um e-mail válido!';
        emailError.style.color = 'red';
    } else {
        emailError.innerText = 'E-mail válido!';
        emailError.style.color = 'green';
    }
});


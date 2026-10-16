let body = document.querySelector('body');
let themeButton = document.querySelector('#themeButton')

themeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')){
        themeButton.innerText = 'Ativar modo claro';
    } else {
        themeButton.innerText = 'Ativar modo escuro';
    }
});
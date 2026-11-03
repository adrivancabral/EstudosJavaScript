let email = 'usuario@gmail.com';
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (emailPattern.test(email)) {
    console.log('E-mail válido!');
} else {
    console.log('E-mail inválido');
}


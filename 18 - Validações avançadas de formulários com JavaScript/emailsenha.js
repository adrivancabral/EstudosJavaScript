

let name = 'Adrivan';
let email = 'adrivan@gmail.com';
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let password = '123456789';
if (name.trim() === '') {  //trim(): remove os espaços do inicio e do final
    console.log('Informe seu nome!');
}
if (!emailPattern.test(email)) { // ! : inverte o resultado d euma condição 
    console.log('Informe um e-mail válido!');
}
if (password.length < 8) { // length: verifica o tamanho de uma string
    console.log('A senha precisa ter pelo menos 8 caracteres!');
}
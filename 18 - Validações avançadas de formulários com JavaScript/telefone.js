let phone = '22999999999'
phone = phone.replace(/\D/g, ''); // replace(): substitui partes de uma string. /\D/g: encontra tudo que não é número.
phone = phone.replace(/^(\d{2})(\d)/, '($1) $2'); // ^:indica o início da string. \d: representa um número de 0 a 9. {2}: significa duas ocorrências
phone = phone.replace(/(\d{5})(\d)/, '$1-$2'); // $1-$2: recuperam os números capturados pelos parênteses.
console.log(phone);


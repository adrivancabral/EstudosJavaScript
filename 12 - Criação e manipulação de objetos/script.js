let user = {
    name: 'Adrivan',
    age: 29,
    city: 'Maricá'
};

delete user.city // remove a propiedade
user.age = 30; // modifica a propiedade 
user.profession = 'Desenvolvedor' // Adiciona mais uma propiedade ao user
console.log(user.name);
console.log(user.age);
console.log(user['city']); // pode ser usado das duas formas

console.log(user);

let expense = {
    name1: 'Combustível',
    amount: 120,

    showDetails: function() {
        console.log(this.name1 + '- R$' + this.amount);
    }
};

expense.showDetails();
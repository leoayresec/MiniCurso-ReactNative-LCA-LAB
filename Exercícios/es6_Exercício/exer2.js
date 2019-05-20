// exercicio 2
// 2.1

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

// 2.2 Dica: Utilize uma constante pra function

const usuario = { nome: "Wellington", idade: 29 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

// 2.3 // Dica: Utilize uma constante pra function

const nome = "Wellington";
const idade = 29;

const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });

mostraUsuario(nome, idade);

mostraUsuario(nome);

// 2.4

const promise = () => new Promise((resolve, reject) => resolve());

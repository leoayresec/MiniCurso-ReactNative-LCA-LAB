# Exercícios de ES&
# 1º exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find:
const usuarios = [ { nome: wellington, idade: 29, instituição: 'Ufra' }, { nome: 'Leonardo', idade: 23, instituição: 'Inss' }, { nome: 'Lucas', idade: 15, instituição: 'Ufra' }];

1.1 Utilizando o map Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

1.2 Utilizando o filter Crie uma variáveis que tenha apenas os usuários que são da instituição ufra e com mais de 18anos: [{ nome: 'Wellington', idade: 29, instituição: 'Ufra' }]

1.3 Utilizando o find Crie uma variável que procura por um usuário faz parte da instituiçã Google: // undefined

1.4 Unindo operações: Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuemno máximo 50 anos

# 2º exercício: 
Converta as funções nos seguintes trechos de código em Arrow Functions:

// 2.1

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) { 
    return item + 10;});

// 2.2 
Dica: Utilize uma constante pra function

const usuario = { nome: 'Wellington', idade: 29 };

function mostraIdade(usuario) {
    return usuario.idade;}

mostraIdade(usuario);

// 2.3
// Dica: Utilize uma constante pra function

const nome = "Wellington";
const idade = 29;

function mostraUsuario(nome = 'Diego', idade = 18) {
      return { nome, idade };}

mostraUsuario(nome, idade);

mostraUsuario(nome);

// 2.4

const promise = function() { 
    return new Promise(function(resolve, reject) { 
        return resolve(); })}


# 3º exercício

3.1 Desestruturação simplesA partir do seguinte objeto:
const empresa = {  nome: 'Ufra',  endereco: {    cidade: 'Belém',    estado: 'PA',  }};
Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:
console.log(nome); // Ufra
console.log(cidade); // Belém
console.log(estado); // PA

3.2 Desestruturação em parâmetrosNa seguinte função:

function mostraInfo(usuario) {  
    return `${usuario.nome} tem ${usuario.idade} anos.`;}
mostraInfo({ nome: 'Diego', idade: 23 })

Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuárioseparadamente e a função poder retornar apenas:return `${nome} tem ${idade} anos.`;

# 4º Exercício
Utilizando o operador de rest/spread (...) realize as seguintes operações:
4.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeiraposição do vetor e outra variável y que recebe todo restante dos dados.
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3

4.2 Spread
A partir do objeto e utilizando o operador spread:const usuario = {  nome: 'wellington',  idade: 29,  endereco: {    cidade: 'Marituba',    uf: 'PA',    pais: 'Brasil',  }};Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

# 5º Exercício
Converta o seguinte trecho de código utilizando Template Literals:
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

# 6º exercício
Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

const nome = 'Wellington Silva';
const idade = 23;
const usuario = {  nome: nome,  idade: idade,  cidade: 'Marituba',};

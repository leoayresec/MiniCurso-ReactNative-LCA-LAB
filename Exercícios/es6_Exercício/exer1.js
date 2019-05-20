// 1.1
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

// 1.2
const ufra_maior_18 = usuarios.filter(
  usuario => usuario.instituição === "Ufra" && usuario.idade > 18
);
console.log(ufra_maior_18);

// 1.3
const google = usuarios.find(usuario => usuario.instituição === "ufra");
console.log(google);

// 1.4 Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuemno máximo 50 anos
const maximo_50 = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(elem => elem.idade <= 50);
console.log(maximo_50);

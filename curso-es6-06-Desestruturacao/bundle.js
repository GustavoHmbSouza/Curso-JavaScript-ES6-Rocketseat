"use strict";

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do sul',
    estado: 'SC'
  }
}; //const nom = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;
//Substituido por:

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); //Pega a variável nome de um objeto passado

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);

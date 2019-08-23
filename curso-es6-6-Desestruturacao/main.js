const usuario = 
{
    nome: 'Diego',
    idade: 23,
    endereco: 
    {
        cidade: 'Rio do sul',
        estado: 'SC',
    },
};

//const nom = usuario.nome;
//const idade = usuario.idade;
//const cidade = usuario.endereco.cidade;
//Substituido por:
const {nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//Pega a variável nome de um objeto passado
function mostraNome({nome, idade})
{
    console.log(nome, idade);
}

mostraNome(usuario)
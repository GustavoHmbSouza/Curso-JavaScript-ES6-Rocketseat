//Rest
const usuario = 
{
    nome : 'Gustavo',
    idade : 21, 
    empresa: "SMN"
};
const {nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


//Rest 2
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);


//Rest 3
function soma(...params)
{
    return params.reduce((total, next) =>
     total + next);
}
console.log(soma (1, 3, 6));


//Spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


//Spread 2
const usuario1 = 
{
    nome: 'Gustavo', 
    idade: 21,
    empresa: 'SMN'
};
const usuario2 = {...usuario1, nome:'Kauê'}

console.log(usuario2);
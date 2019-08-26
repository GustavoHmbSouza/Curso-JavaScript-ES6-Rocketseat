//Percorrendo o vetor 1
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item)
{
    return item;
});
console.log(`Valores do vetor: ` + newArr);

//Percorrendo o vetor 2
const mult = arr.map(function(item)
{
    return item * 2;
});
console.log(`Multiplica cada item do
vetor por 2: ` + mult);

//Percorrendo o vetor 3
const somaValorIndex = arr.map(function(item, index)
{
    return item + index;
});
console.log(`Soma cada item do vetor
com o seu index: ` + somaValorIndex);

//Percorrendo o vetor 4
const sum = arr.reduce(function(total, next)
{
    return total + next;
});
console.log(`Exibe a soma de todos os elemetos.
O reduce permite usar a variável total
em todas as execuções: ` + sum);

//Percorrendo o vetor 5
const filter = arr.filter(function(item)
{
    return item % 2 === 0;
});
console.log(`O filter precisa retornar true ou false.
Caso retorne true, retorna tbm aquele valor.
Caso retorne false, não retorna aquele valor.
Puxa apenas valores pares: ` + filter);

//Percorrendo o vetor 6
const find = arr.find(function(item)
{
    return item === 2;
});
console.log(`Busca o valor 2 no vetor: ` + find);
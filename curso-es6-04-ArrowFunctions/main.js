const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(function(item)
{
    return item;
});
console.log(`Valores do vetor: ` + newArr);

const mult = arr.map(item => item * 3);
console.log(`Valores do vetor: multiplicados 
por 3: ` + mult);
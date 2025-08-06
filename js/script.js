//declaração de variáveis
//const, let e var
//nao precisa declarar o tipo da variável
//const - valor não pode ser reatribuído
const nome = 'Leticia'
console.log(nome)

//let - valor pode ser reatribuído, let = "passe a ser x valor"
let a = 2
let n = 'José'
console.log(a)
console.log(n)
n = 'Maria'
console.log(n)
let l = 'javascript'
console.log('Aprendendo ' + l)

//var - escopo global ou local, nao recomendada, antiga e traz problemas
var idade = 18
console.log('Oi ' + nome1)
if(idade >=18) {
    var nome1 = 'Joao'
    console.log('Sim, ' + nome1 + ' é maior de idade')
}
console.log('Ate mais, ' + nome1)

//exibir o tipo do dado armazenado na variável
let i = 10
console.log(typeof(i))

//Concatenação
const n3 = 2
const n4 = '3'
console.log(n3 + n4)
const n5 = n3 + n4
console.log(n5)
const n6 = n3 + Number(n4)
console.log(n6)

//Operadores == e ===
console.log(true === 1)
console.log(true == 1)
console.log(1 === '1') 
console.log(1 === 1)
console.log(2 == '2')
console.log(1 == 1)







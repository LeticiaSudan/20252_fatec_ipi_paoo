//CALLBACK HELL
const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
  const exibirConteudo = function(erro, conteudo){
    if(erro){
      console.log(`Deu erro: ${erro}`)
    }
    else{
      console.log(`Conteúdo: ${conteudo}`)
      const dobro = Number(conteudo.toString()) * 2
      const finalizar = function(erro){
        if(erro){
          console.log(`Deu erro escrevendo o dobro: ${erro}`)
        }
        else{
          console.log('A escrita do dobro deu certo')
        }
      }
      fs.writeFile('dobro.txt', dobro.toString(), finalizar)
      console.log('Fim da exibirConteudo...')
    }  
  }
  fs.readFile(nomeArquivo, exibirConteudo)
  console.log('Fim da abrirArquivo...')
}
//chamar a função daqui a pouco
abrirArquivo("arquivo.txt")


// function demorada(tempo){
//   const atualMaisTempo = new Date().getTime() + tempo
//   while(new Date().getTime() <= atualMaisTempo);
//   const d = 8 + 4
//   return d
// }
// const a = 2 + 6
// const b = 5 + 9
// setTimeout(() => {
//   const tempo = 7000
//   const d = demorada(tempo)
//   console.log(`d(${tempo}): ${d}`)
// }, 0)

// setTimeout(() => {
//   const tempo = 1000
//   const d = demorada(tempo)
//   console.log(`d(${tempo}): ${d}`)
// }, 0)


//OBJETOS
// let calculadora = {
//   soma: (a, b) => a + b,
//   subtracao: function(a, b){
//     return a - b
//   } 
// }

// let x = 2
// let y = 3
// console.log(Object.values(calculadora))
// for (let operacao of Object.values(calculadora)){
//   //Antes de mostrar o resultado, mostrar o nome da função, interpolando em um único console.log ${}
//   console.log(`${operacao.name}: ${operacao(x, y)}`)
// }


// const concessionaria = {
//   cnpj: '00011122210001-45',
//   endereco: {
//     logradouro: 'Rua A',
//     numero: 120,
//     bairro: {
//       nome: 'Vila J',
//       regiao: 'zona norte'
//     }
//   },
//   veiculos: {
//     'ford': [
//       {
//         modelo: 'Ka',
//         anoDeFabricacao: 2015
//       },
//       {
//         modelo: 'Ecosport',
//         anoDeFabricacao: 2018
//       }
//     ],
//     'chevrolet': [
//       {
//         modelo: 'Onix',
//         anoDeFabricacao: 2025
//       } 
//     ]
//   }
// }
// for (let marca of Object.keys(concessionaria.veiculos)){
//   console.log(marca)
//   const veiculosDaMarca = concessionaria.veiculos[marca]
//   // console.log(veiculosDaMarca)
//   for (let veiculo of veiculosDaMarca){
//     console.log(veiculo.modelo)
//   }
// }

// for(let veiculoFord of concessionaria.veiculos.ford){
//   console.log(veiculoFord)
// }

//objeto Javascript não é sinônimo de objeto JSON(JavaScript Object Notation), mas são parecidos
//uma pessoa se chama Maria, tem 21 anos e mora na Rua 8, 121
// let pessoa2 = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua 8',
//         numero: 121
//     }
// }
// console.log(pessoa2.endereco.logradouro + ', ' + pessoa2.endereco.numero)

//uma pessoa se chama Leticia e tem 19 anos
//{} objeto javascript (colecao pares chave-valor)
// let pessoa = {
//     nome: 'Leticia',
//     idade: 19
// }

// console.log('Me chamo ' + pessoa.nome + ' e tenho ' + pessoa.idade + ' anos')

//FUNÇÃO INTERNA
// function saudacoesFactory(saudacao, nome){
//     let a
//     return function(){
//         console.log(saudacao + ', ' + nome)
//     }
// }

// let olaLeticia = saudacoesFactory('Olá', 'Leticia')
// let tchauLeticia = saudacoesFactory('Tchau', 'Leticia')
// olaLeticia()
// tchauLeticia()

// function ola (){
//     let nome = 'Leticia'
//     return function(){
//         console.log('Olá, ' + nome)
//     }
// }
// let olaResult = ola()
// olaResult() 

// function f (){
//     let nome = 'Leticia'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

//CLOSURES
// let umaFuncao = function() {
//     console.log('Fui armazenada em uma variável')
// }
// umaFuncao()

// function f(funcao){
//     funcao()
// }
// f(umaFuncao)

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//     }
//     return outraFuncao
// }
//tem que chamar ela dessa forma pois a função só retorna a outraFuncao sem executá-la
// const gResult = g()
// gResult()
//ou assim:
// g()
//ou:
// f(g())


//VETORES
//transforma os valores do array em um único valor
// const valores = [1, 2, 3, 4]
//Mais prático escrever com arrow function
// const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual)
// console.log(soma)
// se fosse com função normal:
// const soma = valores.reduce(function(acumulador, valorAtual) {
//     return acumulador + valorAtual
// })

// const nomes = ['Leticia', 'João', 'Amanda', 'Ana', 'Alex']
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)
// const todosComecamComA = nomes.every(nome => nome.startsWith('A'))
// console.log(todosComecamComA)
// const peloMenosUmComecaComA = nomes.some(nome => nome.startsWith('A'))
// console.log(peloMenosUmComecaComA)

//ARROW FUNCTIONS
// const dobro = (n) => {
//     console.log('Calculando o dobro...')
//     return 2 * n
// }
// console.log(dobro(1))

// const dobro = (n) => 2 * n
// console.log(dobro(5))

// const hello = () => console.log("Hello")
// hello()
// const hello = () => {
//     console.log("Hello")
// }

//FUNCÕES
// function soma(a, b){
//     return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)

//Primeiro o Javascript executa uma pré-compilação de todas as funções
//Quando elas tem o mesmo nome, a última função é a que prevalece
//Depois ele executa as chamadas hello() e hello('Leticia')
//Só que primeiro ele imprime 'oi, undefined' e só depois 'oi, Leticia'
// function hello(){
//     console.log("Oi")
// }
// hello()
// function hello(nome){
//     console.log("Oi, " + nome)
// }
// hello('Leticia')

//DECLARAÇÃO DE VARIÁVEIS
//const, let e var
//nao precisa declarar o tipo da variável
//const - valor não pode ser reatribuído
// const nome = 'Leticia'
// console.log(nome)

//let - valor pode ser reatribuído, let = "passe a ser x valor"
// let a = 2
// let n = 'José'
// console.log(a)
// console.log(n)
// n = 'Maria'
// console.log(n)
// let l = 'javascript'
// console.log('Aprendendo ' + l)

//var - escopo global ou local, nao recomendada, antiga e traz problemas
// var idade = 18
// console.log('Oi ' + nome1)
// if(idade >=18) {
//     var nome1 = 'Joao'
//     console.log('Sim, ' + nome1 + ' é maior de idade')
// }
// console.log('Ate mais, ' + nome1)

//exibir o tipo do dado armazenado na variável
// let i = 10
// console.log(typeof(i))

//CONCATENAÇÃO
// const n3 = 2
// const n4 = '3'
// console.log(n3 + n4)
// const n5 = n3 + n4
// console.log(n5)
// const n6 = n3 + Number(n4)
// console.log(n6)

//OPERADORES == e ===
// console.log(true === 1)
// console.log(true == 1)
// console.log(1 === '1') 
// console.log(1 === 1)
// console.log(2 == '2')
// console.log(1 == 1)







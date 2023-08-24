/*
* jonathan 
*
*/

//1. 10. 5

//2. 10, 20, 10

//3. variavel texto, variavel numero

let nome;
let idade;
console.log(typeof nome,typeof idade);
//*
nome = prompt("qual o seu nome?");
idade = prompt("qual a sua idade?");
console.log(typeof nome,typeof idade);

console.log("ola", nome, "voce tem", idade, "anos");

//variaveis recebem as respostas do comando prompt e seus tipos ficaram como string e numero

//2.

let simOuNao1;
let simOuNao2;
let simOuNao3;

simOuNao1 = prompt("voce esta cansado?");
simOuNao2 = prompt("voce sai");
simOuNao3 = prompt("voce dança?");
console.log(typeof simOuNao1,typeof simOuNao2,typeof simOuNao3);
console.log("cansado?", simOuNao1, "voce sai?", simOuNao2, "voce dança?", simOuNao3);

//3.

let a = 10;
let b = 25;
//vamos criar uma variavel para guardar o valor de "a"
let c = 10;
 a = b;
 b = c;
console.log("o novo valor de a é", a, "o novo valor de b é", b);

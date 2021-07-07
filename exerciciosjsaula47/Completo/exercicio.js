console.log("10" / 2)
//ele consegue converter e retorna 5

console.log("10" + 2)
//ele concatena e retorna 102

console.log("10,2" / 2)
//ele não consegue converter e retorna NaN (not a number)

console.log(0.1 + 0.7)
//ele soma mas com imprecisão, retornando 0.79

Number(null) //0
null == 0 //false
null < 1 //true
typeof(NaN) //number

var nome = 'caique' //string
var idade = 27      //int
var semdefinicao    //undefined
var nula = null     //objeto (!?!?)
// aspas simples e aspas duplas são a mesma coisa

const nota = 0              //int
const sobrenome = 'zaneti'  //string
const naodefinida           //Undefined

let x = 3           //int    
let jogo = 'Habbo'  //String
let icia            //Undefined

if (true) {
    var sair = "Roupa de Sair";
}

console.log(sair); //Retorna Roupa de Sair

if (true) {
    let dormir = "Pijama";
}

console.log(dormir); // Retorna ReferenceError: dormir is not defined
// no JavaScript o ; é tipo dente do siso... ele esta lá mas não precisa
// tem gente que prefere ter e tem gente que arranca assim que pode

console.log(banana);
var banana = 'Nanica';
//O resultado é undefined, o que significa que a variavel foi para cima

console.log(banana);
var banana = 'Nanica';
console.log(banana);
//O resultado é undefined e Nanica, uma linha após a outra
//pois no primeiro console log a variavel foi definida e
//no segundo foi efetivamente exibida

var banana = 'Nanica';
console.log(banana);
//O resultado é 'Nanica'

console.log(banana);
let banana = 'Nanica';
//O resultado é ReferenceError:
//Cannot acess 'banana' before initialization

console.log(banana);
let banana = 'Nanica';
console.log(banana);
//O resultado é ReferenceError:
//Cannot acess 'banana' before initialization

let banana = 'Nanica';
console.log(banana);
//O resultado é 'Nanica'

// =  (atribuição)
// == (igualdade)
// === (igualdade estrita)
// && (and)
// || (or)
// ! (not)

x = y           //atribui y a x
var var1 = 3    //atribui 3 a variavel var1
3 == var1       //true
"3" == var1     //true
3 == '3'        //true
3 === var1      //true
3 === '3'       //false

+ 3             // Retorna 3
+ '3'           // Retorna 3
+ 'caique'      // Retorna NaN
'Za' + 'neti'   // Retorna Zaneti
3 + '3'         // Retorna 33
'3' + 3         // Retorna 33

var x = 3       //declarando variavel
-x              // Retorna  -3
x               // Retorna 3
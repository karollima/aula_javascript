function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
   // console.log(document.getElementById("agradecimento"));
   // alert("Obrigada por clicar");
}
function redirecionar(){
    window.open("https://www.linkedin.com/in/anne-karollyne-de-lima-0b99a7a2/"); /*abrir link em outra aba*/ 
   //window.location.href = "https://www.linkedin.com/in/anne-karollyne-de-lima-0b99a7a2/"; /*abrir na mesma página*/
}

function trocar(Element){
    //document.getElementById("mousemove").innerHTML = "Obridaga por passar o mouse";
    Element.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}
function voltar(Element){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    Element.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}

function funcaoChange(Element){
    console.log(Element.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}

*/
/*
var validar = 0;

function validaIdade(idade){
    if (idade>=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/



/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth());
alert(d.getMinutes());
*/


/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};




/*
var count = 5;
while (count < 5) {
    console.log(count);
    alert (count);
    count++;
}


/*
var idade = prompt("Qual sua idade?");
if (idade>=18){
    alert("maior de idade");
}else {
    alert("menor de idade");
};
*/




/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
//lista.pop("");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "))
*/


/*
var nome = "Karol Lima";
var n1 = 5;
var n2 = 3;
var frase = " Japão é o melhor time do mundo";
//alert(nome + " Tem " + idade + " anos");
//alert(idade + idade2);
console.log (nome);
console.log (n1 * n2);
console.log(frase.toLocaleUpperCase());
//alert(frase.replace("japão", "Brasil"));
*/
var pregunta = prompt ("Vols multiplicar o sumar?");
var num1 = prompt ("Digues un numero");
var num2 = prompt ("Digues el segon numero");

num1 = parseInt(num1);
num2 = parseInt(num2);

function sumar(num1,num2){
    return num1 + num2;
}

function sumar(num1,num2){
    return num1 + num2;
}

if (pregunta == "sumar") {
    document.write(sumar(num1 , num2));
} else if (pregunta == "multiplicar") {
    document.write(sumar(num1 , num2))
}

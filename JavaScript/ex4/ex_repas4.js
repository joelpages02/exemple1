var num1 = prompt("Escriu un número ");

function esPrimer(num1) {
  for (i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      return num1 + " no es un numeroi primer";
    }
  }
  return num1 + " es un numero primer";
}

document.write(esPrimer(num1));
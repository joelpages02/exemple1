var num1 = prompt("Digues un numero");
num1 = parseInt(num1);

  for (i = 0; i < num1; i++) {
    if (num1 % i == 0) {
      console.log(`${num1} ${i}`);
    }
}
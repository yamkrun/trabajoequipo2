function pedirNumeros() {
  let entrada1 = prompt("Ingresá el primer número:");
  let entrada2 = prompt("Ingresá el segundo número:");

  let a = parseFloat(entrada1);
  let b = parseFloat(entrada2);

  if (isNaN(a) || isNaN(b)) {
    alert("Ingresaste valores inválidos.");
    return;
  }

  realizarCalculos(a, b);
}
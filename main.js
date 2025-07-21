 function suma(a, b) {
  return a + b;
  
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
   
}
function division(a, b) {
 return a / b;
}

let operaciones = parseInt(prompt("1.sumar\n"+"2.restar\n"+"3.multiplicar\n"+"4.dividir\n" ))
if (isNaN (operaciones) || operaciones<1 || operaciones>4){
    alert("ingrese numero valido")}
    else{
 let a = parseFloat(prompt("Ingresá el primer número:"));
  let b= parseFloat(prompt("Ingresá el segundo número:"));

  if (isNaN(a) || isNaN(b)) {
    alert("Ingresaste valores inválidos.");
  }else{
    let resultado
 switch (operaciones) {
    case 1:
        resultado = suma(a,b)
        break;
    case 2:
        resultado = resta(a,b)
        break;
    case 3:
        resultado = multiplicacion(a,b)
        break;
    case 4:
        resultado = division(a,b)
        break;
    default:
        alert("ingrese un numero válido")
        break;
 }
alert("El resultado de tu operación es: " + resultado)}}

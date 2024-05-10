let nota1 = parseInt(prompt("Ingrese su primera nota"));
let nota2 = parseInt(prompt("Ingrese su segunda nota"));
let nota3 = parseInt(prompt("Ingrese su tercera nota"));
let promedio;
promedio=(nota1+nota2+nota3)/3;

switch (true){
  case (promedio>0 && promedio<=3):
    console.log('nota insufciente');
    break;
  case(promedio>=4 && promedio<=5):
    console.log('nota regular');
    break
  case(promedio>=6 && promedio<=7):
    console.log('nota buena');
    break
  case(promedio>=8 && promedio<=9):
    console.log('nota muy buena');
    break
  case(promedio == 10):
    console.log('sobresaliente');
    break
  case(promedio<0 || promedio >10):
    console.log('valor de promedio fuera de limite');
    break
}
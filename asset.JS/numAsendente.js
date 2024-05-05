let numero1=parseInt(prompt('ingrese el primer numero porfavor'));
let numero2=parseInt(prompt('ingrese el segundo numero '));
let numero3=parseInt(prompt('ingrese tres numeros'));
let menor, medio,mayor;
// Ordena los numeros en orden acendente//
if(numero1>numero2 && numero1>numero3){
    mayor=numero1;
    if(numero2>numero3){
        medio=numero2;
        menor=numero3;
    }else{
        medio=numero3;
        menor=numero2;
    }
    console.log('el orden de los numero en forma acendente es ',menor+' '+medio+' '+mayor);
}

if(numero2>numero1 && numero2>numero3){
    mayor=numero2;
    if(numero1>numero3){
        medio=numero1;
        menor=numero3;
    }else{
        medio=numero3;
        menor=numero1;

    }
    console.log('el orden de los numero en forma acendente es ',menor+' '+medio+' '+mayor);
}
if(numero3>numero1 && numero3>numero2){
    mayor=numero3;
    if(numero2>numero1){
        medio=numero2;
        menor=numero1;
    }else{
        medio=numero1;
        menor=numero2;
    }
    console.log('el orden de los numero en forma acendente es ',menor+' '+medio+' '+mayor);
}
//Ordena los numeros numero que son iguales en orden acendente //
if(numero1==numero2 && numero1>numero3){
    mayor=numero1;
    medio=numero2;
    menor=numero3;
    console.log('el orden de los numero en forma acendente es ',menor+' '+medio+' '+mayor);
}
if(numero2==numero3 && numero2>numero1){
    mayor=numero2;
    medio=numero3;
    menor=numero1;
    console.log('el orden de los numero en forma acendente es ',menor+' '+medio+' '+mayor);
}
if(numero3==numero1 && numero3>numero2){
    mayor=numero3;
    menor=numero2;
    medio=numero1;
    console.log('el orden de los numero en forma acendente es ',menor+' '+medio+' '+mayor);
}
if(numero1==numero2 && numero2==numero3 && numero3==numero1){
    menor=numero1;
    medio=numero2;
    mayor=numero3;
    console.log('los tres numeros son iguales no tienen orden ',menor+' '+medio+' '+mayor);
}
let edad=prompt('ingrese su edad porfavor');

if (edad>0 && edad<=12){
    console.log('es niño');
}else if(edad>12 && edad<=19){
    console.log('Adolecente');
}else if(edad>19 && edad<=59){
    console.log('Adulto');
}else if(edad>=60){
    console.log('Adulto Mayor');
} 
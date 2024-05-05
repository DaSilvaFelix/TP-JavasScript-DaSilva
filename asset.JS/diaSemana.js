    let dia=parseInt(prompt('ingrese un numero de los 7 dias de la semana'));

switch (dia){
    case 1:console.log('Lunes');
        break;
    case 2:console.log('Martes');
        break;
    case 3:console.log('Miercoles');
        break;
    case 4:console.log('Jueves');
        break;
    case 5:console.log('Viernes');
        break;
    case 6:console.log('Sabado');
        break;
    case 7:console.log('Domingo');
        break;
    default:
        console.log('fuera de los limites de los dias de la semana');
        break;
}
let cantidadProducto = parseInt(prompt('ingrese la cantidad de productos'));
let precio = parseInt(prompt('ingrese la cantidad de lo que cuesta el producto'));
let total = cantidadProducto * precio
let descuento;

if ( cantidadProducto > 10 && total >= 20000 ){
    descuento = total - (total * 0.15)  
    console.log('FELICIDADES  A GANADO UN DESCUENTO DEL 15% su total a pagar es ', descuento);
}else{
    console.log('su total a pagar es de ', total)

}
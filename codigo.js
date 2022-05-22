//Condicional, ciclos e iteraciones y funciones.

//Proceso
//Seleccionar el producto
//Agregarlo al carrito 
//Elegir con que pagar
//Descuento con pago en efectivo/transferencia
//Pago con cuotas


// Primero seleccionar la mascota y el rubro


function compraPetshop(mascota) {
    return mascota != '';

}


const mascotaRubro = function(mascota, rubro) { return mascota + rubro }
let mascota = prompt("¿Que animal tenes de mascota?");
while (mascota != "ESC") {
    let rubro = parseInt(prompt("Que estas buscando? \n 1-Alimento balanceado \n 2-Accesorios \n (Ingrese el número correspondiente)"));
    console.log(mascotaRubro(mascota, rubro));
    if (rubro == 1) {
        alert("Mascota: " + mascota + ", " + "busca: Alimento Balanceado");
    } else if (rubro == 2) {
        alert("Mascota: " + mascota + ", " + "busca: Accesorios");
    }
    //Seleccionar alimento balanceado o accesorio

    const mascotaAlimento = function(bolsa, cantidad) { return bolsa + cantidad }
    let bolsa = "";
    let cantidad = "";
    const precioW = 150;
    const precioJ = 130;
    const waltcan = (kgW) => kgW * precioW;
    const jaspe = (kgJ) => kgJ * precioJ;
    if ((rubro = "balanceado") || (rubro = "Balanceado") || (rubro = "alimento balanceado") || (rubro = "ALIMENTO BALANCEADO")) {
        let bolsa = prompt("Ingrese la marca de alimento de su preferencia \nWaltcan \nJaspe");
        let cantidad = prompt("De cuantos kg \n 15kg \n 25kg");
        switch (bolsa) {
            case "waltcan":
                alert(waltcan(cantidad));
                break;
            case "jaspe":
                alert(jaspe(cantidad));
                break;

        }
    } else
    if ((rubro = "accesorios") || (rubro = "Accesorios") || (rubro = "ACCESORIOS")) {
        let tipoDeAccesorio = prompt("Ingrese el accesorio de su preferencia");
        let cantidad = parseInt(prompt("Ingrese la cantidad"));
        alert("Su eleccion es: " + tipoDeAccesorio + "Cantidad: " + cantidad + "kg.");
    }

    const formaDePago = prompt("Ingrese con que metodo va a abonar\n 1-Efectivo \n 2-Tarjeta de credito \n 3-Tarjeta de debito");
    let precioEfectivo = precio - (precio * 0.10);
    let precioDebito = precio - (precio * 0.03);
    switch (formaDePago) {
        case "efectivo":
            alert("El precio final de su compra es " + precioEfectivo);
            break;
        case "tarjeta de credito":
            alert("El precio final de su compra es " + precio);
            break;
        case "tarjeta de debito":
            alert("El precio final de su compra es " + precioDebito);
            break;
        default:
            break;
    }
}
alert("Corresponde ingresar tipo de mascota");
console.log(mascota + rubro + bolsa + cantidad);
//RECORDATORIO: AL FINAL HACCER EL BUCLE PARA QUE CUANDO PONGA OK SE CALCULE EL PRECIO + DESCUENTO EN EFECTIVO
console.log(mascota + rubro + bolsa + cantidad);
//RECORDATORIO: AL FINAL HACCER EL BUCLE PARA QUE CUANDO PONGA OK SE CALCULE EL PRECIO + DESCUENTO EN EFECTIVO
//Condicional, ciclos e iteraciones y funciones.

//Proceso
//Seleccionar el producto
//Agregarlo al carrito 
//Elegir con que pagar
//Descuento con pago en efectivo/transferencia
//Pago con cuotas


// Primero seleccionar la mascota y el rubro





const mascotaRubro = function(mascota, rubro) { return mascota + rubro }
let mascota = prompt("¿Cómo se llama tu mascota?");
//Seleccionar alimento balanceado o accesorio
while (mascota != "") {
    let rubro = parseInt(prompt("Qué estás buscando para " + mascota + "?" + "\n 1 - Alimento balanceado \n 2 - Accesorios \n(Ingrese el número correspondiente)"));
    console.log(mascotaRubro(mascota, rubro));
    const mascotaAlimento = function(bolsa, cantidad) { return bolsa + cantidad }
    let bolsa = "";
    let cantidad = "";
    const precioW = 150;
    const precioJ = 130;
    let descuentoEfectivo = 0.10;
    let descuentoDebito = 0.03;
    if (rubro == "1") {
        alert("Mascota: " + mascota + ", " + "busca: Alimento Balanceado");
        let bolsa = prompt("Ingrese la marca de alimento de su preferencia \nWaltcan \nJaspe");
        let cantidad = prompt("De cuantos kg \n 15kg \n 25kg");
        let formaDePago = parseInt(prompt("Ingrese con que metodo va a abonar\n 1-Efectivo \n 2-Tarjeta de credito \n 3-Tarjeta de debito \n (Ingrese el numero correspondiente)"));
        if (bolsa = "waltcan") {
            if (formaDePago == 1) {
                let precioEfectivoW = (precioW * cantidad) - (descuentoEfectivo * precioW * cantidad);
                alert("El precio de tu alimento es: $" + precioEfectivoW);
                break;
            } else if (formaDePago == 3) {
                let precioDebitoW = (precioW * cantidad) - (descuentoDebito * precioW * cantidad);
                alert("El precio de tu alimento es: $" + precioDebitoW);
                break;
            }
            alert("El precio de tu alimento es: $" + precioW * cantidad);
            break;
        }
        if (bolsa = "jaspe") {
            if (formaDePago == 1) {
                let precioEfectivoJ = (precioJ * cantidad) - (descuentoEfectivo * precioJ * cantidad);
                alert("El precio de tu alimento es: $" + precioEfectivoJ);
                break;
            } else if (formaDePago == 2) {
                let precioDebitoJ = (precioJ * cantidad) - (descuentoDebito * precioJ * cantidad);
                alert("El precio de tu alimento es: $" + precioDebitoJ);
                break;
            }
            alert("El precio de tu alimento es: $" + precioJ * cantidad);
            break;
        }
    } else if (rubro == 2) {
        alert("Mascota: " + mascota + ", " + "busca: Accesorios");
        let tipoDeAccesorio = prompt("Ingrese el accesorio de su preferencia");
        let cantidad = parseInt(prompt("Ingrese la cantidad"));
        alert("Su eleccion es: " + tipoDeAccesorio + " Cantidad: " + cantidad + " .");
    }
}

console.log(mascota + rubro + bolsa + cantidad);
alert("Corresponde ingresar tipo de mascota");
//RECORDATORIO: AL FINAL HACCER EL BUCLE PARA QUE CUANDO PONGA OK SE CALCULE EL PRECIO + DESCUENTO EN EFECTIVO
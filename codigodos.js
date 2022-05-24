//FUNCION UNO
//Variables
let precioUnitario;
let cantidad;
let precioFinal;
let resultado;
let descuentoEfectivo;

function formaDePago() {
    cantidad = parseInt(prompt('De cuantos kg prefiere la bolsa de Alimento Balanceado \n 15kg \n 25kg \n(Solo ingresar el número'));
    precioUnitario = parseInt(prompt('Ingrese el precio unitario de su producto elegido'));
    precioFinal = prompt('Desea abonar en Efectivo?\n Si \n No');
}


//funcion anonima 
let mostrar = function(resultado) {
    alert(resultado);
};

//funcion flecha
let precio = (a, b) => {
    console.log(a * b);
    return a * b;
};

function operar(num1, num2, precioFinal) {
    switch (precioFinal) {
        case 'si':
            return precio(precioUnitario, cantidad);
        default:
            break;
    }
}
//funcion flecha
let efectivo = (a, b) => {
    console.log(a - b);
    return a - b;
};

const resta = (a, b) => a - b
const descuentoEf = 0.1 * resultado;

function descuentoEfectivof() {
    descuentoEfectivo = resta(resultado, descuentoEf);
}


//FUNCION DOS
//Variables


function descuento() {
    if (precioFinal == "si") {
        alert("Se le realizara un descuento por pago en efectivo del 10%")
        return descuentoEf;
    } else {
        alert("Se le cobrara precio de lista");
        return false;
    }
}

formaDePago();
resultado = operar(precioUnitario, cantidad, precioFinal);
mostrar("El precio final de tu producto es $" + resultado);
descuento();
mostrar("El precio final de tu producto es $" + descuentoEfectivo);
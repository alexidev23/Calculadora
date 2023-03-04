let pantalla = document.getElementById('pantalla');
let operacion = '';

function agregarNumero(num) {
    operacion += num;
    pantalla.value = operacion;
}

function agregarOperador(operador) {
    if (operacion.slice(-1) != '+' && operacion.slice(-1) != '-' && operacion.slice(-1) != '*' && operacion.slice(-1) != '/') {
        operacion += operador;
        pantalla.value = operacion;
    }
}

function agregarPunto() {
    if (!operacion.includes('.')) {
        operacion += '.';
        pantalla.value = operacion;
    }
}

function borrarpantalla() {
    operacion = '';
    pantalla.value = '';
}

function borrar() {
    operacion = operacion.toString().slice(0,-1)
    pantalla.value = operacion
}

function calculo() {
    try {
        let resultado = eval(operacion);
        pantalla.value = resultado;
        operacion = resultado.toString();
    } catch(err) {
        pantalla.value = 'Error';
        operacion = '';
    }
}
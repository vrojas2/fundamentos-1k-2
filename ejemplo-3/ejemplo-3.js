var inputNumero = document.querySelector('#numero');
var pResultado = document.querySelector('#resultado')
var btnEvaNumero = document.querySelector('#btnEvaNumero');
btnEvaNumero.addEventListener('click',evalNumero);

var selectOpciones = document.querySelector('#opciones');
selectorOpciones.addEventListener('change',evalOpcion);

function evalOpcionVSwitch() {
    var numero = Number(inputNumero.value),
    var opcion = selectOpciones

    switch(opcion) {
        case 'mitad':
            pResultado.textContent = 'La mitad es ' + (numero/2);
            break;
        case 'cuadrado':
            pResultado.textContent = 'El cuadrado es ' + (numero*numero);
            break;
        case 'par':
            if(numero%2 === 0) {
                pResultado.textContent = 'Es par';
            }
            else {
                pResultado.textContent = 'Es impar';
            }
            break;
    }
}

function evalOpcion(){
    var numero = Number(inputNumero.value);
    var opcion = selectOpciones.value;

    if(opcion === 'mitad') {
        pResultado.textContent = 'La mitad es ' +(numero / 2);
    }
    else if (opcion === 'cuadrado') {
        pResultado.textContent = 'El cuadrodo es ' + (numero*numero);
    }
    else if (opcion === 'par') {
        if(numero%2 === '0') {
            pResultado.textContent = 'Es par';
        }
        else {
        pResultado.textContent = 'Es impar';
        }
    }
    else {
        pResultado.textContent = '';
    }
}

function evalNumero(){
    var numero = Number(inputNumero.value);
  

    if(numero > 0) {
        pResultado.textContent = 'El numero ' +
        numero + ' es positivo';
    }
    else if (numero < 0) {
        pResultado.textContent ='El numero ' +
        numero + ' es negativo';
    }
    else {
        pResultado.textContent = 'El numero es cero';
    }
}

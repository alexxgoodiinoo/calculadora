let display = document.getElementById('pantalla');
let operadorActual = null;
let primerNumero = '';
let segundoNumero = '';
let puntoPermitido = true;
let hayError = false; 

function calcular(numero) {
    if (hayError) {
        limpiarPantalla();
        hayError = false;
    }

    if (numero === '.') {
        if (!puntoPermitido) return;
        puntoPermitido = false;
    }
    
    if (operadorActual === null) {
        primerNumero += numero;
        display.innerText = primerNumero;
    } else {
        segundoNumero += numero;
        display.innerText = segundoNumero;
    }
}

function limpiarPantalla() {
    primerNumero = '';
    segundoNumero = '';
    operadorActual = null;
    display.innerText = '0';
    puntoPermitido = true;
    hayError = false; 
}

function establecerOperacion(operacion) {
    if (primerNumero === '') return;
    operadorActual = operacion;
    puntoPermitido = true;
}

function calcularOperacion() {
    let resultado;
    const num1 = parseFloat(primerNumero);
    const num2 = parseFloat(segundoNumero);
    
    switch (operadorActual) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                resultado = 'ERROR, no se puede dividir entre 0';
                hayError = true; 
            } else {
                resultado = dividir(num1, num2);
            }
            break;
        case 'sqrt':
            resultado = Math.sqrt(num1);
            break;
        case 'pow':
            resultado = Math.pow(num1, num2);
            break;
        default:
            return;
    }
    
    display.innerText = resultado;
    primerNumero = resultado;
    segundoNumero = '';
    operadorActual = null;
    puntoPermitido = true;
}

function multiplicar(num1, num2) {
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }
    return resultado;
}

function dividir(num1, num2) {
    let contador = 0;
    while (num1 >= num2) {
        num1 -= num2;
        contador++;
    }
    return contador;
}

function reproducirMusica() { 
    audio.play();
}
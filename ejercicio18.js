let a = parseFloat(prompt("Valor a"));
let b = parseFloat(prompt("Valor b"));
let c = parseFloat(prompt("Valor c"));

function calculo(a, b, c) {
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
}

calculo(a, b, c);
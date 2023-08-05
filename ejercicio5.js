function sumaNumerosPrimosEratostenes(numero) {
    const esPrimo = new Array(numero + 1).fill(true);
    esPrimo[0] = esPrimo[1] = false;

    for (let i = 2; i * i <= numero; i++) {
        if (esPrimo[i]) {
            for (let j = i * i; j <= numero; j += i) {
                esPrimo[j] = false;
            }
        }
    }

    let suma = 0;
    for (let i = 2; i <= numero; i++) {
        if (esPrimo[i]) {
            suma += i;
        }
    }
    
    return suma;
}

// Ejemplo de uso
const numero = 13;
const sumaPrimos = sumaNumerosPrimosEratostenes(numero);
console.log(`La suma de los números primos menores o iguales a ${numero} es: ${sumaPrimos}`);

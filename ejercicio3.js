document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generateButton");
    var filterButton = document.getElementById("filterButton");
    var resultadoElemento = document.getElementById("resultado");

    generateButton.addEventListener("click", function () {
        var vectorAleatorio = generarVectorAleatorio();
        resultadoElemento.innerHTML = vectorAleatorio.join(" | ");
    });

    filterButton.addEventListener("click", function () {
        var vectorAleatorio = generarVectorAleatorio();
        var numerosPares = filtrarNumerosPares(vectorAleatorio);
        resultadoElemento.innerHTML = numerosPares.join(" | ");
    });
});

function generarVectorAleatorio() {
    var vector = [];
    for (var i = 0; i < 10; i++) {
        vector.push(Math.floor(Math.random() * 100) + 1); // Genera números aleatorios entre 1 y 100
    }
    return vector;
}

function filtrarNumerosPares(vector) {
    var numerosPares = vector.filter(function (numero) {
        return numero % 2 === 0;
    });
    return numerosPares;
}

// Criar a variável
let numero = 0;

// Buscar id="numero"
const elementoNumero = document.getElementById("numero");

// Buscar id="aumentar"
document.getElementById("aumentar").addEventListener("click", function() {
    numero++;
    elementoNumero.textContent = numero;
});

// Buscar id="diminuir"
document.getElementById("diminuir").addEventListener("click", function() {
    numero--;
    elementoNumero.textContent = numero;
});

// Buscar id="zerar"
document.getElementById("zerar").addEventListener("click", function() {
    numero = 0;
    elementoNumero.textContent = numero;
});

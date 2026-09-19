document.getElementById("calcular").addEventListener("click", function(){
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;
    if (operacao === "soma"){
        resultado = numero1 + numero2;
    }
    else if(operacao === "subtracao"){
        resultado = numero1 - numero2;
    }
    else if(operacao === "multiplicacao"){
        resultado = numero1 * numero2;
    }
    else if(operacao === "divisao"){
        resultado = numero1 / numero2;
    }
    document.getElementById("resultado").textContent = resultado;
});
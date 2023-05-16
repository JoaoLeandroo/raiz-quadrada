const button = document.querySelector(".entrada-dados button")
const resposta = document.querySelector(".resposta")

button.addEventListener("click", function() {
    const input = document.querySelector(".inputNumber")
    const raiz = Math.sqrt(input.value)
    
    if(input.value === ''){
        alert("CAMPO VAZIO, INFORME UM NÚMERO VALIDO")
    }else{
        resposta.innerHTML = `
            <p>A Raiz quadrada do número ${input.value} é igual a:</p>
            <span>${raiz.toFixed(2)}</span>
        `
        input.value = ''
    }
    
})

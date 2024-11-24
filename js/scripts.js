// SELEÇÃO DE ELEMENTOS
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operations")
const multiplicationTitle = document.querySelector("#multiplication-title span")

// FUNÇÕES
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""

    // LAÇO PARA CALCULAR A MULTIPLICAÇÃO
    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i
        
        //adiciona o html a estrura seguindo a ordem de multiplicação
        const template = 
        `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        
        const parser = new DOMParser()

        // variavel transformando a string em html
        const hmtlTemplate = parser.parseFromString(template, "text/html")

        // adicionando a variavel com html para a class .row no html
        const row = hmtlTemplate.querySelector(".row");
        // adicionado estrutura ao ultimo filho da classe 
        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerHTML = number;
};


// EVENTOS
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // recebendo os valores preenchidos nos inputs
    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicationInput.value

    if(!multiplicationNumber || !multiplicatorNumber) {
        alert("### ALGUM NÚMERO ESTA FALTANDO ###")
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumber)
})
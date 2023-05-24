const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao) {
    const peca = document.querySelector('.controle-contador')

    if(operacao ==='-') {
        braco.value = parseInt(peca.value) - 1
    } else {
        braco.value = parseInt(peca.value) + 1
    }
}
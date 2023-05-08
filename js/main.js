const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

somar.addEventListener('click', (evento) => {
    braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener('click', (evento) => {
    braco.value = parseInt(braco.value) - 1
})

function manipulaDados(operacao) {
    if(operacao ==='subtrair') {
        braco.value = parseInt()
    }
}
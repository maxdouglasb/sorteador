function numberGeneration() {

    const primeiroNumero = Math.ceil(document.querySelector('.pnumero').value)
    const segundoNumero = Math.floor(document.querySelector('.snumero').value)
    const resultado = document.querySelector('.result2')




    if (segundoNumero <= primeiroNumero) {

        resultado.innerText = 'Primeiro Número Maior ou Igual ao Segundo Favor Alterar'

    } else {
        resultado.innerText = Math.floor(Math.random() * (segundoNumero - primeiroNumero + 1) + primeiroNumero)

    }

    console.log(resultado)
}
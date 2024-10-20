entrada = document.getElementById("numero")
otroEntrada = document.getElementById("otroNumero")
btn = document.getElementById("btn")
salida = document.getElementById("resultado")

let numero = 0
let otroNumero = 0
entrada.addEventListener("input", (evento) => {
    numero = evento.target.value
})
otroEntrada.addEventListener("input", (evento) => {
    otroNumero = evento.target.value
})

function multiplicacion(parametro, otroParametro){
    return parametro*otroParametro
}

btn.addEventListener("click",()=>{
    resultado = multiplicacion(numero,otroNumero)
    let hijo = document.createElement("h3")
    hijo.innerHTML = `${numero}x${numero} es ${resultado}`
    salida.appendChild(hijo)
})

let resultado = multiplicacion(5,10)

console.log(resultado)
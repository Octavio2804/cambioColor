const colores = ["#FE2600", "#FCF342", "#73A580", "#5189E9", "#FFB3A5", "#FFFFFF"]

const boton = document.getElementById("btn")
const color = document.querySelector(".color")
const elegir = document.getElementById("elegir")

boton.addEventListener("click", function(){
    const numero = numeroAzar();
    document.body.style.backgroundColor = colores[numero]
    color.textContent = colores[numero]
})

function numeroAzar(){
    return Math.floor(Math.random()*colores.length);
}

elegir.addEventListener("click", function(){
    let elegirNumero = prompt("Eliga un numero del 1 al 6 y se le asignará un color")
    if (elegirNumero= 1){
        return (document.body.style.backgroundColor = colores[0]) + (alert("Su color es: Rojo"))
    }else if(elegirNumero = "2"){
            return (document.body.style.backgroundColor = colores[1]) + (alert("Su color es: Amarillo"))
    }
})
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
    if (elegirNumero == "1"){
        return (document.body.style.backgroundColor = colores[0]) + (alert("Su color es: Rojo (#FE2600)"))
    }else if(elegirNumero == "2"){
            return (document.body.style.backgroundColor = colores[1]) + (alert("Su color es: Amarillo (#FCF342)"))
    }else if(elegirNumero == "3"){
        return (document.body.style.backgroundColor = colores[2]) + (alert("Su color es: Verde (#73A580)"))
    }else if(elegirNumero == "4"){
        return (document.body.style.backgroundColor = colores[3]) + (alert("Su color es: Azul (#5189E9)"))
    }else if(elegirNumero == "5"){
        return (document.body.style.backgroundColor = colores[4]) + (alert("Su color es: Rosa (#FFB3A5)"))
    }else if(elegirNumero == "6"){
        return (document.body.style.backgroundColor = colores[5]) + (alert("Su color es: Blanco (#FFFFFF)"))
    } else{
        return alert ("Por favor introduzca alguno de los numeros indicados")
    }
})
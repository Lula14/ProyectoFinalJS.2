// DECLARACION DE VARIABLES A USAR

const productos = document.querySelector("#productos")
const kilos = document.querySelector("#kilos")
const cantidad = document.querySelector("#cantidad")
const botonCalcular = document.querySelector("#botonCalcular")
const importe = document.querySelector("span")


// ARRAY DE PRODUCTOS Y SUS VARIANTES

const datosProductos = [
    { tipo: 'CatChow Adulto', factor: 350 },
    { tipo: 'Dogui', factor: 250 },
    { tipo: 'Pro Plan', factor: 650 },
    { tipo: 'Royal Canin', factor: 700 },
    { tipo: 'Old Prince', factor: 500 },
    { tipo: 'Pedigree', factor: 450 },
    { tipo: 'Balanced', factor: 700 },
    { tipo: 'Whiskas', factor: 300 },
    { tipo: 'Eukanuba', factor: 700 },
]

const datosKilos = [
    { tipo: 1, factor: 1 },
    { tipo: 3, factor: 2.9 },
    { tipo: 7.5, factor: 6.7 },
    { tipo: 15, factor: 13.5 },]

let costoKilo = 0
for (index = 0; index < datosProductos.length; index++) {
    costoKilo = datosProductos[index].precio

}


localStorage.setItem(datosProductos, datosKilos, costoKilo)






//////////////////////////////////////////








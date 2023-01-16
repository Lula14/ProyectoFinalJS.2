

const cargarCombo = (select, datosProductos) => {
    if (datosProductos.length > 0) {
        datosProductos.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        });
    } else {
        console.error("No existen elementos en el Array :(")
        botonCalcular.disabled = false
    }
}

cargarCombo(productos, datosProductos)
cargarCombo(kilos, datosKilos)

const datosCompletos = () => {
    if (productos.value !== "..." && kilos.value !== "..." && parseInt(cantidad.value) && cantidad.value >= 0) {
        return true
    } else {
        return false
    }
}


const realizarCotizacion = () => {

    if (datosCompletos()) {
        const total = new Cotizador(cantidad.value, productos.value, kilos.value, costoKilo)
        console.log(total.calcular())
        importe.innerText = total.calcular()


    } else {
        swal("Para Continuar completa todos los valores solicitados.")
    }
}


botonCalcular.addEventListener("click", realizarCotizacion)


realizarCotizacion()




Toastify({
    text: "Bienvenido a Tijuana !!",
    duration: 6000,
    destination: false,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { }
}).showToast();
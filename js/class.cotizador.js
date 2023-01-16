 class Cotizador {
    constructor(cantidad, factorproductos, factorkilos, costoKilo) {
        this.cantidad = parseInt(cantidad) || 1
        this.factorPr = parseFloat(factorproductos) || 1
        this.factorKg = parseFloat(factorkilos) || 1
        this.costoKG = parseFloat(costoKilo) || 1
    }
    calcular() {
        let total = (this.cantidad * this.factorPr * this.factorKg * this.costoKG).toFixed(2)
            return total.toLocaleString()
            
    }
} 
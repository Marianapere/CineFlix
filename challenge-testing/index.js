class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = total * (porcentaje / 100);
        return total - descuento;
    }
}

module.exports = CarritoCompra;


// -------------------------clase Gama------------------------------ 
//class CarritoCompra {

//     constructor() {
//         this.productos = [];
//     }

//     agregarProducto(producto) {
//         // this.productos.push({nombre,precio});
//          this.productos.push(producto);
//     }

//     calcularTotal() {
//         return this.productos.reduce((acc, producto) => acc + producto.precio, 0);
//         //el segundo argumento es el valor al que quiero inicializar el acumulador total=0
//     }

//     aplicarDescuento(descuento) {
//         const total = this.calcularTotal();
        
//         return total -(total * descuento)/ 100;
//     }
// }
// ------------------------fin clase del profe ------------------------------- 
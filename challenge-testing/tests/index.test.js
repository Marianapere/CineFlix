const CarritoCompra= require("../index.js");

// Pruebas unitarias utilizando Jest
describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    }); //beforeEach() para asegurar de que se crea una nueva instancia de CarritoCompra antes de cada prueba, evitando así que las pruebas afecten mutuamente sus resultados.

    it('inicializar carrito vacío', () => {
        expect(carrito.productos).toEqual([]);
    });

    it('agregar producto al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 10 };
        carrito.agregarProducto(producto);
        expect(carrito.productos.length).toBe(1);
        expect(carrito.productos[0]).toEqual(producto);
    });

    it('calcular total de la compra', () => {
        // Crear productos y agregarlos al carrito
        const productos = [
            { nombre: 'Producto 1', precio: 10 },
            { nombre: 'Producto 2', precio: 20 },
            { nombre: 'Producto 3', precio: 30 }
        ];
        productos.forEach(producto => carrito.agregarProducto(producto));
        // Verificar que el total calculado sea correcto
        expect(carrito.calcularTotal()).toBe(60);
    });

    it('aplicar descuento al total de la compra', () => {
        // // Crear productos y agregarlos al carrito
        const productos = [
            { nombre: 'Producto 1', precio: 10 },
            { nombre: 'Producto 2', precio: 20 },
            { nombre: 'Producto 3', precio: 30 }
        ];
        productos.forEach(producto => carrito.agregarProducto(producto)); //// Calcular el total sin descuento
        const totalSinDescuento = carrito.calcularTotal();
        const porcentajeDescuento = 10; //// Aplicar un descuento y verificar que el total con descuento sea correcto
        const totalConDescuento = carrito.aplicarDescuento(porcentajeDescuento);
        expect(totalConDescuento).toBeCloseTo(totalSinDescuento * (1 - (porcentajeDescuento / 100)));
    });
});



// -------------------------clase de Gama ------------------------------- 
// describe("Clase de CarritoCompra",()=> {    
//     //metodo que permite indicar que dentro de todas las pruebas necesito hacer/iniciar antes de correr cada test
//     // beforeEach(()=>{
//     //      const carrito = new CarritoCompra();
//     // })

//     it ("Incializar carrito como array vacío",()=> {
//         const carrito = new CarritoCompra();
//         expect(carrito.productos).toEquals([]);
//     });


//     it('agregar producto al carrito', () => {
//         const carrito = new CarritoCompra();

//         expect(carrito.agregarProducto).toBeDefined();
//         carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
//         expect(carrito.productos.length).toBe(1);
//         expect(carrito.productos[0]).toEqual({ nombre: 'Producto 1', precio: 10 });
//     });


//     it('calcular total de la compra', () => {
//         const carrito = new CarritoCompra();

//         expect(carrito.calcularTotal()).toBeDefined();
//        carrito.agregarProducto({name:"Campera",price:10});
//         expect(carrito.calcularTotal()).toBe(60);
//     });


//     it('aplicar descuento al total de la compra', () => {
//        const carrito= new CarritoCompra();

//        expect(carrito.aplicarDescuento).toBeDefined();
//        carrito.agregarProducto({name:"Campera",price:10});
//        expect(carrito.aplicarDescuento(10)).toBe(27);
    


//     });
// });
// -------------------------fin clase ------------------------------ 

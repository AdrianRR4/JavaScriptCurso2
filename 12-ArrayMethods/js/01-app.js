const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//si se quiere acceder a cada uno de los elementos
meses.forEach((mes)=>{
    console.log(mes)
});

//identificar si un mes especifico existe forma "manual"
/*
meses.forEach(mes=>{
    if(mes==='Enero')
    console.log('Enero si existe')
});
*/
//Este solo sirve para arreglos "de un solo indice"

const resultado= meses.includes('Febrero');
console.log(resultado);
 
//para un arreglo de objetos se utiliza some para encontrar un dato específico
const existe= carrito.some(producto =>{
    return producto.nombre==='Teclado';
});
console.log(existe);
let data=[
    {

    Producto:"camisas",
    Ciudad:"EdoMéx",
    Ventas:525,
    Costos: 357
    },
    
{
    Producto:"zapatos",
    Ciudad:"Yucatan",
    Ventas:997,
    Costos: 479
},
{
    Producto:"sombreros",
    Ciudad:"CDMX",
    Ventas:512, 
    Costos: 189
},
{
    Producto:"zapatos",
    Ciudad:"Yucatan",
    Ventas:997,
    Costos: 479
},
{
    Producto:"sombrero",
    Ciudad:"Yucatan",
    Ventas:653,
    Costos: 189
},
{
    Producto:"zapatos",
    Ciudad:"EdoMex",
    Ventas:297,
    Costos: 357
},
{
    Producto:"chaquetas",
    Ciudad:"CDMX",
    Ventas:127,
    Costos: 609
},
{
    Producto:"zapatos",
    Ciudad:"EdoMex",
    Ventas:237,
    Costos: 357
},
{
    Producto:"chaquetas",
    Ciudad:"Yucatan",
    Ventas:597,
    Costos: 609
},

{
    Producto:"camisas",
    Ciudad:"EdoMex",
    Ventas:695,
    Costos: 327
},
]

const resultado={
    list:[]
}


/*
data.forEach(function(k){
    console.log('informacion de ', k);
});
*/

let columna= "Producto";

for(let index in data){

    const dato=data[index];
    if(resultado.list.indexOf(dato[columna])===-1){
            resultado.list.push(dato[columna]);
    }
    //console.log(dato[columna]);

    console.log(resultado);
}

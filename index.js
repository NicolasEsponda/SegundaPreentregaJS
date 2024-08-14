alert("Bienvenidos a la tienda de celulares online");

const productos = [
    {marca: "samsung", precio: 150000},
    {marca: "apple", precio: 2300000},
    {marca: "motorola", precio: 40599},
    {marca: "xiaomi", precio: 39500},
    {marca: "nokia", precio: 871000},
    {marca: "sony", precio: 634000},
]

let carrito = []

let seleccion = prompt("¿desea llevar algun producto?")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("¿desea llevar algun producto? si o no")
} 

if(seleccion == "si"){
    alert("nuestro productos en stock son los siguientes")
    let todosLosProductos = productos.map((productos) => productos.marca + " " + productos.precio + " " + "$")
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por su visita, hasta pronto!!")
}

while(seleccion != "no"){
    let productos = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(productos == "samsung" || productos == "apple" || productos == "motorola" || productos == "xiaomi" || productos == "nokia" || productos == "sony"){
        switch(productos) {
            case "samsung":
                precio = 150000
                break;
            case "apple":
                precio = 2300000
                break;
            case "motorola":
                precio = 40599
                break;
            case "xiaomi":
                precio = 39500
                break;
            case "nokia":
                precio = 871000
                break; 
            case "sony":
                precio = 634000
                break;
            default:
                break;           
        }
    let unidades = parseInt(prompt("¿cuantas unidades desea llevar?"))
    carrito.push({productos, unidades, precio})
    console.log(carrito)
    } else {
        alert("ingrese un producto que haya en stock")
    }

    seleccion = prompt("¿desea llevar algo mas?")
    while(seleccion === "no"){
        alert("muchas gracias por su compra!!")
        carrito.forEach((carritoFinal) =>{
            console.log(`productos: ${carritoFinal.productos}, unidades: ${carrito.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

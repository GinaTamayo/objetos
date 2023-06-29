//Cree un programa que pida al usuario el nombre de un producto existente en una tienda,
//luego, que le muestre el precio del producto. El usuario debe poder elegir de entre 
//por lo menos cinco productos. Use objetos
let productos = {papa : 3500, arroz : 3000, lentejas : 3.000, aceite : 5000, sardina : 2500};
let productoUsuario = prompt(`Ingrese un producto existente en la tienda`);

    if (productoUsuario in productos) {
        console.log(`El precio del producto '${productoUsuario}' es: ${productos[productoUsuario]}`);
    } else {
        console.log(`El prducto no existe en la tienda`);
    }


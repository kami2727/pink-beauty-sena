"use strict"

function cosmeticos() {
    // DATOS DEL CLIENTE
    let nombre = prompt("DIGITE SU NOMBRE");
    let producto = prompt("DIGITE EL COSMETICO QUE DESEA");
    let precio = prompt("DIGITE EL PRECIO DEL PRODUCTO");

    // MOSTRAR INFORMACION
    console.log("*** PINK BEAUTY SENA ***");
    console.log("Nombre: ", nombre);
    console.log("Producto: ", producto);
    console.log("Precio: $", precio);

    // RESUMEN
    let mostrar = confirm("¿DESEA VER EL RESUMEN?");

    if (mostrar) {
        alert(
            "***** RESUMEN *****" +
            "\nNOMBRE: " + nombre +
            "\nPRODUCTO: " + producto +
            "\nPRECIO: $" + precio
        );
    }
}

// RELACIONAR EL BOTON CON LA FUNCION
document.addEventListener("DOMContentLoaded", function () {
    const btncosmeticos =
        document.getElementById("btncosmeticos");

    if (btncosmeticos) {
        btncosmeticos.addEventListener("click", cosmeticos);
    }
});




/* 
const pdf = require("html-pdf");
const fs = require("fs");

const ubicacionPlantilla = require.resolve("./facturaPelada.html");
let contenidoHtml = fs.readFileSync(ubicacionPlantilla, 'utf8'); */

function crearFactura() {


    // Estos productos podrían venir de cualquier lugar

    var productos, cartString;

    //window.onload = () => {
        // tenemos que traer del localstorage el arreglo de elementos previamente cargado
        cartString = localStorage.getItem('cartItems');
        localStorage.removeItem('cartItems');
        productos = JSON.parse(cartString);
    //}

    // Nota: el formateador solo es para, valga la redundancia, formatear el dinero. No es requerido, solo estetico
    const formateador = new Intl.NumberFormat("en", { style: "currency", "currency": "ARG" });
    // Generar el HTML de la tabla
    let tabla = "";
    let subtotal = 0;


    for (const producto of productos) {
        // Aumentar el total
        const totalProducto = producto.cantidad * producto.precio;
        subtotal += totalProducto;
        // Y concatenar los productos
        tabla += `<tr>
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>${formateador.format(producto.precio)}</td>
        <td>${formateador.format(totalProducto)}</td>
        </tr>`;
    }

    //creo un nuevo elemento tbody y lo agrego a facturaPelada.html
    // dentro del div que tiene una clase tablaProducts
    const card = document.createElement("tbody");
    card.innerHTML = tabla;
    const tablaProductos = document.querySelector(".tablaProductos");
    tablaProductos.appendChild(tabla);


    const descuento = 0;
    const subtotalConDescuento = subtotal - descuento;
    const impuestos = 0;
    const total = subtotalConDescuento + impuestos;
    // Remplazar el valor {{tablaProductos}} por el verdadero valor
    //contenidoHtml = contenidoHtml.replace("{{tablaProductos}}", tabla);

    // Y también los otros valores

/*     contenidoHtml = contenidoHtml.replace("{{subtotal}}", formateador.format(subtotal));
    contenidoHtml = contenidoHtml.replace("{{descuento}}", formateador.format(descuento));
    contenidoHtml = contenidoHtml.replace("{{subtotalConDescuento}}", formateador.format(subtotalConDescuento));
    contenidoHtml = contenidoHtml.replace("{{impuestos}}", formateador.format(impuestos));
    contenidoHtml = contenidoHtml.replace("{{total}}", formateador.format(total));
 */
/*     pdf.create(contenidoHtml).toFile("salida.pdf", (error) => {
        if (error) {
            console.log("Error creando PDF: " + error);
        } else {
            console.log("PDF creado correctamente");
        }
    }); */
}

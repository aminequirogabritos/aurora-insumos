const fecha = new Date();
const [day, month, year] = [fecha.getDate(), fecha.getMonth(), fecha.getFullYear()];
let fechaDeHoy = day + "/" + month + "/" + year;
const [hour, minutes, seconds] = [fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()];
let horaActual = hour + ":" + minutes + ":" + seconds
console.log("🚀 ~ file: script.js ~ line 4 ~ diaDeHoy", fechaDeHoy);



/* if (document.readyState !== 'loading') {
    // if the document is already loaded, it will execute the code
    $('.traerFactura').load("../../partePDF/facturaPelada.html");
    crearFactura();
} else { 
    // if the document is not loaded, this will add an event listener 
    // to the document for when it's loaded
    document.addEventListener('DOMContentLoaded', function () {
        $('.traerFactura').load("../../partePDF/facturaPelada.html");
        $(window).load(crearFactura());
    });
 } */

document.addEventListener('readystatechange', (event) => {

    // When HTML/DOM elements are ready:
    /* if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        $('.traerFactura').load("../../partePDF/facturaPelada.html");
    } */

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    let aux = location.href.split("/").slice(-1);
    console.log("🌸 ~ file: script.js ~ line 32 ~ document.addEventListener ~ aux", aux)
    if (event.target.readyState === "complete" && aux == 'graciasPorSuCompra.html') {
        //$('.traerFactura').load("../../partePDF/facturaPelada.html");
        $(window).load(crearFactura('.traerFactura'));
    }
});

function crearFactura(htmlElement) {

    // Estos productos podrían venir de cualquier lugar
    const facturaString = `
        <div class="row">
            <div class="col-md-10">
                <h1>Comprobante de compra</h1>
            </div>
            <div class="col-md-2">
                <img class="img img-responsive" src="../../imagenes/logoaurora.jpeg" alt="Logotipo">
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-10">
                <h1 class="h6">Aurora Insumos</h1>
            </div>
            <div class="col-md-2 text-center">
                <strong>Fecha</strong>
                <br>${fechaDeHoy}<br>
                <strong>Hora</strong>
                <br>${horaActual}<br>
                <strong>Factura No.</strong>
                <br>
                1
            </div>
        </div>
        <hr>
        <div class="row text-center" style="margin-bottom: 2rem;">
            <div class="col-md-6">
                <h1 class="h2">Cliente</h1>
                <span id="clienteFactura"><strong>Amine Quiroga</strong></span>
            </div>
            <div class="col-md-6">
                <h1 class="h2">Remitente</h1>
                <strong>Aurora Insumos</strong>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <table class="table table-condensed table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody class="productosRenglones">
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">
                                <h4>Total</h4>
                            </td>
                            <td>
                                <h4 class="total"></h4>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    `;




    /* 
        // insertar factura
        const traerFactura = document.createElement("div");
        traerFactura.innerHTML = facturaString;
        const tablaBody = document.querySelector(".traerFactura");
        tablaBody.appendChild(traerFactura);
     */
    var productos, cartString;

    //window.onload = () => {
    // tenemos que traer del localstorage el arreglo de elementos previamente cargado
    cartString = localStorage.getItem('cartItems');
    //localStorage.removeItem('cartItems');
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


    // insertar factura
    const traerFactura = document.createElement("div");
    traerFactura.innerHTML = facturaString;

    //creo un nuevo elemento tbody y lo agrego a facturaPelada.html
    // dentro del div que tiene una clase tablaProducts
    //const card = document.createElement("tbody");
    //card.innerHTML = tabla;

    const tablaProductos = traerFactura.querySelector('.productosRenglones');
    //tablaProductos.appendChild(card);
    tablaProductos.innerHTML = tabla;

    const subtotalConDescuento = subtotal;
    // Remplazar el valor {{tablaProductos}} por el verdadero valor
    //contenidoHtml = contenidoHtml.replace("{{tablaProductos}}", tabla);

    // Y también los otros valores


    (traerFactura.querySelector('.total')).innerHTML = formateador.format(subtotal);


    /*     pdf.create(contenidoHtml).toFile("salida.pdf", (error) => {
            if (error) {
                console.log("Error creando PDF: " + error);
            } else {
                console.log("PDF creado correctamente");
            }
        }); */

    if (htmlElement !== null) {
        const tablaBody = document.querySelector(htmlElement);
        tablaBody.appendChild(traerFactura);
    }

    return traerFactura;
}

export {crearFactura};
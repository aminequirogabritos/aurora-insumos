/* hacemos uso de html-pdf y fs */
const pdf = require("html-pdf");
const fs = require("fs"); /* permite leer html como string */
/* constante de ubicacion */
const ubicacionPlantilla = require.resolve("./html.html");

/* leemos el archivo html */
let contenidoHtml = fs.readFileSync(ubicacionPlantilla, 'utf8');

const valorPasadoPorNode = "Soy un valor pasado desde JavaScript";

contenidoHtml = contenidoHtml.replace("{{valor}}", valorPasadoPorNode); /* aca se reemplaza una parte del string por la var declara arriba */

/* creamos el pdf, y lo guardamos en un archivo */
pdf.create(contenidoHtml).toFile("salida.pdf", (error) => {
    /* hacemos callback esperando posible error */
    if (error) {
        console.log("Error creando PDF: " + error);
    } else {
        console.log("PDF creado correctamente");
    }
});
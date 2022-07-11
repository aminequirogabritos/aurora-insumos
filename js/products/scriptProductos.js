
/////////////////////// PRODUCTOS ///////////////////////////////





const crearNuevaLinea = (idProducto, nombreProducto, descripcionProducto, precioProducto) => {

    const card = document.createElement("div");
    card.className = "mi_padding col-6 col-md-4 col-lg-3";

    const contenido = `
        <div class="product-card card">
            <img class="card-img-top img-fluid" src="${idProducto}" alt="">
                <div class="card-body">
                    <h6 class="card-text text-center">${nombreProducto}</h6>
                    <h6 class="card-text text-muted text-center">${descripcionProducto}</h6>

                    <p class="card-text text-muted text-center">$${precioProducto}</p>

                    <div class="d-flex justify-content-evenly">
                        <button class="btn btn-block form-button mr-2">Comprar</button>
                        <button class="btn btn-block ver-button m-0">Ver</button>
                    </div>

                </div>
        </div>
    `;

    card.innerHTML = contenido;
    return card;

}


const table = document.getElementById("products-container");


const listaProductos = () => {
    const promise = new Promise((resolve, reject) => {

        const http = new XMLHttpRequest();

        http.open("GET", "http://localhost:8080/api/producto");

        console.log(http.response);

        http.send();

        console.log(http.response);

        http.onload = function () {
            const response = JSON.parse(http.response);
            if (http.status >= 400) {
                reject(response);
            } else {
                resolve(response);
            }
        }
    });
    return promise;
};

listaProductos().then((data) => {
    console.log(data);
    data.forEach(producto => {

        const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
        table.appendChild(nuevaLinea);

    });
}).catch((error) => alert("error!!!!!!!!!!!!"));

/* 
            data.forEach(perfil => {
                const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
                table.appendChild(nuevaLinea);
            });
 */



/////////////////////// PRODUCTOS ///////////////////////////////

var viewButtons;

const crearNuevaLinea = (idProducto, nombreProducto, descripcionProducto, precioProducto) => {

    const card = document.createElement("div");
    card.className = "mi_padding col-6 col-md-4 col-lg-3";

    const contenido = `
        <div class="product-card card">
            <img class="card-img-top img-fluid" src="C:\\Users\\amine\\Desktop\\web\\aurora-insumos\\imagenes\\productosImg\\${idProducto}.jpg" alt="">
                <div class="card-body">
                    <h6 class="card-text text-center">${nombreProducto}</h6>
                    <h6 class="card-text text-muted text-center">${descripcionProducto}</h6>

                    <p class="card-text text-muted text-center">$${precioProducto}</p>

                    <div class="d-flex justify-content-evenly">
                        <button class="buyButton ${idProducto} btn btn-block form-button mr-2" name="${idProducto}" id="buyButton${idProducto}">Comprar</button>
                        <button class="viewButton ${idProducto} btn btn-block ver-button m-0" name="${idProducto}" id="viewButton${idProducto}">Ver</button>
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

/*     viewButtons = document.getElementsByClassName("viewButton");
    console.log(viewButtons); */

}).catch((error) => alert("error!!!!!!!!!!!!"));

/* 
            data.forEach(perfil => {
                const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
                table.appendChild(nuevaLinea);
            });
 */






















// filter by category

var decoupageCat = document.querySelector("#decoupage");
var fibroFacilCat = document.querySelector("#fibroFacil");
var pinturasCat = document.querySelector("#pinturas");
var stencylCat = document.querySelector("#stencyl");



decoupageCat.addEventListener('click', function () {

    //seleccionar productos con categoria decoupage (1)

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

        table.innerHTML = "";
        data.forEach(producto => {

            if (producto.idCategoria == 1) {
                const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
                table.appendChild(nuevaLinea);
            }

        });

/*         viewButtons = document.getElementsByClassName("viewButton");
        console.log(viewButtons); */

    }).catch((error) => alert("error!!!!!!!!!!!!"));

})


fibroFacilCat.addEventListener('click', function () {

    //seleccionar productos con categoria decoupage (1)

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

        table.innerHTML = "";
        data.forEach(producto => {

            if (producto.idCategoria == 2) {
                const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
                table.appendChild(nuevaLinea);
            }

        });

/*         viewButtons = document.getElementsByClassName("viewButton");
        console.log(viewButtons); */

    }).catch((error) => alert("error!!!!!!!!!!!!"));

})


pinturasCat.addEventListener('click', function () {

    //seleccionar productos con categoria decoupage (1)

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

        table.innerHTML = "";
        data.forEach(producto => {

            if (producto.idCategoria == 3) {
                const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
                table.appendChild(nuevaLinea);
            }

        });

/*         viewButtons = document.getElementsByClassName("viewButton");
        console.log(viewButtons); */

    }).catch((error) => alert("error!!!!!!!!!!!!"));

})


stencylCat.addEventListener('click', function () {

    //seleccionar productos con categoria decoupage (1)

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

        table.innerHTML = "";
        data.forEach(producto => {

            if (producto.idCategoria == 4) {
                const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
                table.appendChild(nuevaLinea);
            }

        });

/*         viewButtons = document.getElementsByClassName("viewButton");
        console.log(viewButtons); */

    }).catch((error) => alert("error!!!!!!!!!!!!"));

})



document.addEventListener("DOMContentLoaded", () => { // wait till all the DOM is Loaded, since querying objects at this point they are not there yet.
    const viewButtons = document.getElementsByClassName("viewButton");
    console.log(viewButtons);
/*     for (let viewButton of viewButtons) {

    }; */

    Array.from(viewButtons).forEach(function (viewButton) {
        viewButton.addEventListener('click', (e) => {
            console.log("this is another console log \n"+viewButton);
          });
      });

  });


// go to individual product view 



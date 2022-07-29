
/////////////////////// PRODUCTOS ///////////////////////////////

var todasLasCategorias;

function devolverCategoria(id) {

    for(let i = 0; i < todasLasCategorias.length; i++){
        let cat = todasLasCategorias[i];
        if(id == cat.idCategoria){
            return cat.nombreCategoria;
        }
    }

}


const categoria = () => {
    const promise = new Promise((resolve, reject) => {

        const http = new XMLHttpRequest();

        http.open("GET", "http://localhost:8080/api/categoria");

        http.send();

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

categoria().then((data) => {

    todasLasCategorias = data

}).catch((error) => alert("error!!!! 1"));


var viewButtons;

const crearNuevaLinea = (idProducto, nombreProducto, descripcionProducto, precioProducto, idCategoria) => {

    const card = document.createElement("div");
    card.className = "mi_padding col-6 col-md-4 col-lg-3 productItem";

    var category = devolverCategoria(idCategoria);
    
    card.setAttribute('category',category);

    const contenido = `
        <div class="product-card card" >
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

        const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto, producto.idCategoria);
        table.appendChild(nuevaLinea);

    });

    /*     viewButtons = document.getElementsByClassName("viewButton");
        console.log(viewButtons); 
    */

    /* 
        document.onreadystatechange = function () {
            if (document.readyState === "interactive") {
                addEventToViewButtons();
            }
        }
    */

    // adding the event listeners to every button
    if (document.readyState !== 'loading') {
        // if the document is already loaded, it will execute the code
        addEventToViewButtons();
        addEventToBuyButtons();
    } else {
        // if the document is not loaded, this will add an event listener 
        // to it for when it finishes loading
        document.addEventListener('DOMContentLoaded', function () {
            addEventToViewButtons();
            addEventToBuyButtons();
        });
    }

}).catch((error) => alert("error al traer als cards"));

/* 
            data.forEach(perfil => {
                const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
                table.appendChild(nuevaLinea);
            });
 */




/* if (document.readyState !== 'loading') {
    // if the document is already loaded, it will execute the code
    addEventToViewButtons();
} else {
    // if the document is not loaded, this will add an event listener 
    // to it for when it finishes loading
    document.addEventListener('DOMContentLoaded', function () {
        addEventToViewButtons();
    });
} */



function addEventToViewButtons() {

    // this function takes all the "Ver" buttons
    // and adds an event listener to each one

    viewButtons = document.getElementsByClassName("viewButton");

    Array.prototype.slice.call(viewButtons).forEach(function (viewButton) {
        viewButton.addEventListener('click', (e) => {
            console.log("the event for the button " + viewButton.getAttribute("name") + " works!");

            var productId = viewButton.getAttribute("name");

            console.log(productId);

            // OPCIÓN 1: traer de la BD la info de producto y mandarla por localStorage a la otra página
            /* 
                        const unProducto = () => {
                            const promise = new Promise((resolve, reject) => {
            
                                const http = new XMLHttpRequest();
            
                                http.open("GET", "http://localhost:8080/api/producto/" + productId);
                                console.log("here we are");
            
                                console.log(http.response);
            
                                http.send();
            
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
            
                        unProducto().then((data) => {
                            console.log("this is the data");
                            console.log(data);
            
                            localStorage.setItem( 'unProducto', data );
                            
                            console.log(localStorage);
            
                            location.href = "DetalleProducto.html";
            
                        }).catch((error) => alert("error!!!!!!!!!!!!"));
             */

            // OPCIÓN 2: enviar el id del producto por localStorage y obtenerlo de la BD en la otra página

            localStorage.setItem('productId', productId);

            console.log(localStorage);

            location.href = "DetalleProducto.html";

        });
    });
}


// ADD TO CART

function addEventToBuyButtons() {

    // this function takes all the "Comprar" buttons
    // and adds an event listener to each one

    buyButtons = document.getElementsByClassName("buyButton");

    Array.prototype.slice.call(buyButtons).forEach(function (buyButton) {
        buyButton.addEventListener('click', (e) => {

            
            const button = e.target;    //works
            const productCard = button.closest('.product-card');
            console.log("🚀 ~ file: scriptProductos.js ~ line 250 ~ buyButton.addEventListener ~ productCard", productCard)
            

        });
    });
}


// add to cart





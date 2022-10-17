
/////////////////////// PRODUCTOS ///////////////////////////////

import * as import1 from '../scriptItemQuantity.js';
import * as import2 from '../navbar/scriptCartProducts.js';

/* const updateTotalPrizeCart = require('updateTotalPrizeCart');
const addEventToRemoveItemCarrito = require('addEventToRemoveItemCarrito'); */

var productItemsList = document.getElementById('product-list');

var todasLasCategorias;

var stock;

// obtener categoria de un producto

function devolverCategoria(id) {

    for (let i = 0; i < todasLasCategorias.length; i++) {
        let cat = todasLasCategorias[i];
        if (id == cat.idCategoria) {
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

    todasLasCategorias = data;

}).catch((error) => alert("error!!!! 1"));





var viewButtons;

// crear nueva card de la lista de productos
const crearNuevaLinea = (idProducto, nombreProducto, descripcionProducto, precioProducto, idCategoria) => {

    const card = document.createElement("div");
    card.className = "mi_padding col-6 col-md-4 col-lg-3 productItem";

    var category = devolverCategoria(idCategoria);

    card.setAttribute('category', category);

    const contenido = `
        <div class="product-card card" >
            <img class="card-img-top img-fluid" src="${imageSource}${idProducto}.jpg" alt="">
                <div class="card-body">
                    <h6 class="productName card-text text-center">${nombreProducto}</h6>
                    <h6 class="productDesc card-text text-muted text-center">${descripcionProducto}</h6>

                    <p class="productPrice card-text text-muted text-center">$${precioProducto}</p>

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

// obtener lista de productos de la BD
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
    data.forEach(producto => {

        const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto, producto.idCategoria);
        table.appendChild(nuevaLinea);

    });


    // adding the event listeners to every button
    if (document.readyState !== 'loading') {
        // if the document is already loaded, it will execute the code
        addEventToViewButtons();
        addEventToBuyButtons();
    } else {
        // if the document is not loaded, this will add an event listener 
        // to the document for when it's loaded
        document.addEventListener('DOMContentLoaded', function () {
            addEventToViewButtons();
            addEventToBuyButtons();
        });
    }

}).catch((error) => alert("error al agregar event listeners"));


// agregar evento a todos los botones "Ver". estos botones llevan a vista individual producto
//update price
//totalPriceSpan.innerHTML = "$" + (input.value * price);
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

// crear un item de la lista de productos del carrito
function itemCarrito(productId, productImg, productName, productDesc, productPrice, productStock) {

    const elementsTitle = productItemsList.getElementsByClassName('itemTitle');

    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === productName) {
            var minusButton = document.getElementById(`minusButton${productId}`);
            var plusButton = document.getElementById(`plusButton${productId}`);
            var productQuantity = document.getElementById(`productQuantity${productId}`);

            controlQuantity(plusButton, minusButton, plusButton, productQuantity.value);
            /* 
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.inputNumber');
            controlQuantity(input, plusButton, minusButton, plusButton, price, totalPriceSpan, stock, productQuantity.value);
            elementQuantity.value++; */
            return 0;
        }
    }

    const card = document.createElement("div");
    card.className = "list-group-item p-3 carritoItem";

    //stock = obtenerStockProducto(productId);

    const contenido = `

    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-auto h-100" style="max-width:100px;" id="itemImage">
            <div class="d-flex justify-content-center align-items-center" >
                <img class="itemImg img-fluid h-100 rounded "
                    src="${productImg}"
                    alt="">
            </div>
        </div>

        <div class="col row">

        <div class="col d-flex" id="itemDesc">
        <div class="d-flex flex-column" style="max-width:100px;">
            <h6 class="itemTitle">${productName}</h6>
            <small class="text-muted">${productDesc}</small>
            <small id="productPrice" class="text-muted">${productPrice}</small>
        </div>
        
    </div>


            <div class="col-6 mt-3 d-flex flex-column justify-content-center align-items-center"
                style="max-width:150px;">

                <div class="d-flex align-items-center justify-content-center w-100" >

                    <div class="input-group row d-flex align-items-center justify-content-center">

                        <span class="input-group-btn h-100 square-button" style="margin: 1; padding: 0;">
                            <button type="button" id="minusButton${productId}"
                                class="form-button btn minus d-flex justify-content-center align-items-center"
                                disabled="disabled">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                </svg>
                            </button>
                        </span>

                        <div class="col " style="max-width:60px; margin: 1; padding: 0;">
                            <input type="number" name="productQuantity" id="productQuantity${productId}" class="inputNumber form-control input-number text-center itemQuantity" value="1"
                                min="1" max="${productStock}">
                        </div>

                        <span class="input-group-btn h-100 square-button" style="margin: 1; padding: 0;">
                            <button type="button" id="plusButton${productId}"
                                class="form-button btn plus d-flex justify-content-center align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </button>
                        </span>
                    </div>

                </div>

                <div class="mt-1">
                    <span name="productTotalPrice" class="itemPrice" id="productTotalPrice${productId}">${productPrice}</span>
                </div>

            </div>

            <div class="col-2">

            </div>


        </div>

        <div class="col-auto d-flex justify-content-center align-items-center">
            <div class="shrink-to-fit">
                <button type="button" id="removeButton${productId}"
                    class="icon-button btn d-flex justify-content-center align-items-center"
                    style="width:20; height:20;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path
                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </button>
            </div>
        </div>

    </div>

    `;

    card.innerHTML = contenido;


    return card;

}

/* 
function obtenerStockProducto(productId) {

    var stock;

    const consultaBD = () => {
        const promise = new Promise((resolve, reject) => {

            const http = new XMLHttpRequest();
            http.open("GET", "http://localhost:8080/api/producto/" + productId);
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
    consultaBD().then((data) => {

        stock = parseInt(data.stockProducto);

    }).catch((error) => alert("error!!!! no se pudo obtener el producto con el id esepcificado"));

    return stock;

}
 */

// agregar evento a todos los botones "Comprar". estos botones agregan un elemento al carrito
// hay que ver que no agregue un elemento repetido al carrito en caso de que ya exista
function addEventToBuyButtons() {

    // this function takes all the "Comprar" buttons
    // and adds an event listener to each one

    const cart = document.getElementById("product-list");

    const buyButtons = document.getElementsByClassName("buyButton");

    Array.prototype.slice.call(buyButtons).forEach(function (buyButton) {
        buyButton.addEventListener('click', (e) => {

            const button = e.target;

            const productCard = button.closest('.product-card');

            // obtener la direccion de la imagen
            const productImg = productCard.querySelector('.card-img-top').getAttribute('src');

            //obtener el id del producto

            const productId = getProductId(productImg);

            //obtener el nombre del producto
            const productName = productCard.querySelector('.productName').innerHTML;

            //obtener la desscripcion del producto
            const productDesc = productCard.querySelector('.productDesc').innerHTML;

            //obtener el precio del producto
            const productPrice = productCard.querySelector('.productPrice').innerHTML;

            /////////////////////////////////////////////////////////////////////////////////////
            // esto no sirve de nada ahora, puede servir para cuando 
            // queramos trasladar la info al checkout.
            // funciona.
            /* 
            const productInfo = {
                productId: productId,
                productName: productName,
                productDesc: productDesc,
                productPrice: productPrice
            }

            localStorage.setItem('addItemToCart', JSON.stringify(productInfo));
            */
            /////////////////////////////////////////////////////////////////////////////////////

            // para crear el item HTML, necesito saber stock. esto determinara
            // valor maximo en input cantidad

            const consultaBD = () => {
                const promise = new Promise((resolve, reject) => {

                    const http = new XMLHttpRequest();
                    http.open("GET", "http://localhost:8080/api/producto/" + productId);
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
            consultaBD().then((data) => {

                // si la consulta a BD fue exitosa, crear elemento y agregarlo al carrito

                productItemsList = document.getElementById('product-list');

                const productStock = parseInt(data.stockProducto);

                const newItemCarrito = itemCarrito(productId, productImg, productName, productDesc, productPrice, productStock);

                if (newItemCarrito !== 0) {
                    productItemsList.appendChild(newItemCarrito);
                    // esta funcion es importada del documento scriptItemQuantity.js
                    // agrega event listeners a los botones + y - del item de la
                    // lista de productos que acabamos de crear
                    addEventToItemQuantityButtons(document, productId);
                    addEventToRemoveItemCarrito(document, productId);
                }
                //$('toast').toast('show')
                updateTotalPrizeCart();

            }).catch((error) => alert("error!!!! no se pudo obtener el producto con el id esepcificado"));

        });
    });
}


function getProductId(productImg) {
    //obtener el id del producto
    productImg.replace(imageSource, '');
    let arraySplitted = productImg.split("/")
    let array2 = arraySplitted[4].split(".")
    return array2[0];

}
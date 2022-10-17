
var addToCartButton = document.getElementById("addToCartButton");
var productListDiv = document.getElementById("product-list");
var itemImageDiv = document.getElementById("itemImage");
var itemDescDiv = document.getElementById("itemDesc");
var productsListDiv = document.getElementById("product-list");

/////////////////////// PRODUCTO INDIVIDUAL ///////////////////////////////

var productId;

var stock;
var quantity;

var cart;


//window.onload = function(){
// traer el id de producto de localStorage para poder buscarlo en la bd
productId = localStorage['productId'];
console.log(productId);
localStorage.removeItem('productId');
console.log(productId);

//}

// no se por que hice esto, pero creo que no sirve xd
/* window.onbeforeunload = function () {
    //guardar id de producto antes de recargar
    localStorage.setItem('productId', productId);
} */

window.addEventListener('beforeunload', (event) => {
    localStorage.setItem('productId', productId);
    //event.returnValue = "";
});

//


const cartItem = (producto) => {

    const card = document.createElement("div");
    card.className = "list-group-item p-3";
    card.style = "max-width:100px;";

    const contenido = `

        <div class="row d-flex justify-content-center align-items-center">
            <!-- imagen -->
            <div class="col-auto h-100" style="max-width:100px;" id="itemImage">
                <!-- imagen  -->
                <div class="d-flex justify-content-center align-items-center" >
                    <img class="img-fluid h-100 rounded "
                    src="file://C:\\Users\\amine\\Desktop\\web\\aurora\\images\\${producto.idProducto}.jpg"
                    alt="Acrílico Decorativo">
                </div>
            </div>

            <div class="col row">

                <div class="col-auto d-flex" id="itemDesc">
                    <!-- descripcion -->
                        <div class="d-flex flex-column" style="max-width:100px;">
                        <h6 class="">${producto.nombreProducto}</h6>
                        <small class="text-muted">${producto.descripcionProducto}</small>
                        <small class="text-muted">$${producto.precioProducto}</small>
                    </div>
                    
                </div>


                <div class="col mt-3 d-flex flex-column justify-content-center align-items-center"
                    style="min-width:110px;">

                    <div class="d-flex align-items-center justify-content-center w-100">

                        <!-- cantidad -->
                        <div class="input-group row d-flex align-items-center" style="width: 100px;">

                            <span class="input-group-btn h-100 square-button">
                                <button type="button"
                                    class="form-button btn minus d-flex justify-content-center align-items-center"
                                    disabled="disabled">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                    </svg>
                                </button>
                            </span>

                            <div class="col" style="min-width:40px;">
                                <input type="number" class="form-control input-number text-center" value="1"
                                    min="1">
                            </div>

                            <span class="input-group-btn h-100 square-button">
                                <button type="button"
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
                        <!-- precio total -->
                        <span>$100,00 </span>
                    </div>

                </div>


            </div>

            <div class="col-auto d-flex justify-content-center align-items-center">
                <!-- boton eliminar -->
                <div class="shrink-to-fit">
                    <button type="button"
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




const productListItemImage = (producto) => {

    const card = document.createElement("div");
    card.className = "d-flex justify-content-center align-items-center" ;

    const contenido = `
    <img class="img-fluid h-100 rounded "
    src="file://C:\\Users\\amine\\Desktop\\web\\aurora\\images\\${producto.idProducto}.jpg"
    alt="Acrílico Decorativo">
    `;

    card.innerHTML = contenido;
    return card;

}





const productListItemDesc = (producto) => {

    const card = document.createElement("div");
    card.className = "list-group-item p-3";
    card.style = "max-width:100px;";

    const contenido = `
    <h6 class="">${producto.nombreProducto}</h6>
    <small class="text-muted">${producto.descripcionProducto}</small>
    <small class="text-muted">$${producto.precioProducto}</small>
    `;

    card.innerHTML = contenido;
    return card;

}


addToCartButton.addEventListener('click', (
    function (e) {
        const productoIndividual = () => {
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
        
        productoIndividual().then((data) => {
            console.log(productsListDiv);
            productsListDiv.appendChild(cartItem(data));
        }).catch((error) => alert("error!!!!!!!!!!!!"));
    }

));

const productInfo = (producto) => {

    const card = document.createElement("div");

    const contenido = `

        <h4 class="">${producto.nombreProducto}
        </h4>
        <h5 class="text-muted">${producto.descripcionProducto}</h5>
        <h5 class="text-muted mb'3">$${producto.precioProducto}</h5>

        <small class="text-muted">${producto.stockProducto} disponibles</small>

    `;

    card.innerHTML = contenido;
    return card;

}


const productImage = (producto) => {

    const card = document.createElement("div");

    const contenido = `

        <img class="img-fluid rounded justify-content-center w-100"
            src="C:\\Users\\amine\\Desktop\\web\\aurora-insumos\\imagenes\\productosImg\\${producto.idProducto}.jpg" alt="">
    `;

    card.innerHTML = contenido;
    return card;

}

const productInfoDiv = document.getElementById("product-info");
const productImageDiv = document.getElementById("product-image");

//      traer un producto de la bd      //

const productoIndividual = () => {
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

productoIndividual().then((data) => {
    productInfoDiv.appendChild(productInfo(data));
    productImageDiv.appendChild(productImage(data));
    stock = data.stockProducto;
}).catch((error) => alert("error!!!!!!!!!!!!"));


//                                                         //
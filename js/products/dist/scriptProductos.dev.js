"use strict";

/////////////////////// PRODUCTOS ///////////////////////////////
var imageSource = '../../imagenes/productosImg/';
var todasLasCategorias;

function devolverCategoria(id) {
  for (var i = 0; i < todasLasCategorias.length; i++) {
    var cat = todasLasCategorias[i];

    if (id == cat.idCategoria) {
      return cat.nombreCategoria;
    }
  }
}

var categoria = function categoria() {
  var promise = new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/api/categoria");
    http.send();

    http.onload = function () {
      var response = JSON.parse(http.response);

      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;
};

categoria().then(function (data) {
  todasLasCategorias = data;
})["catch"](function (error) {
  return alert("error!!!! 1");
});
var viewButtons;

var crearNuevaLinea = function crearNuevaLinea(idProducto, nombreProducto, descripcionProducto, precioProducto, idCategoria) {
  var card = document.createElement("div");
  card.className = "mi_padding col-6 col-md-4 col-lg-3 productItem";
  var category = devolverCategoria(idCategoria);
  card.setAttribute('category', category);
  var contenido = "\n        <div class=\"product-card card\" >\n            <img class=\"card-img-top img-fluid\" src=\"".concat(imageSource).concat(idProducto, ".jpg\" alt=\"\">\n                <div class=\"card-body\">\n                    <h6 class=\"card-text text-center\">").concat(nombreProducto, "</h6>\n                    <h6 class=\"card-text text-muted text-center\">").concat(descripcionProducto, "</h6>\n\n                    <p class=\"card-text text-muted text-center\">$").concat(precioProducto, "</p>\n\n                    <div class=\"d-flex justify-content-evenly\">\n                        <button class=\"buyButton ").concat(idProducto, " btn btn-block form-button mr-2\" name=\"").concat(idProducto, "\" id=\"buyButton").concat(idProducto, "\">Comprar</button>\n                        <button class=\"viewButton ").concat(idProducto, " btn btn-block ver-button m-0\" name=\"").concat(idProducto, "\" id=\"viewButton").concat(idProducto, "\">Ver</button>\n                    </div>\n                </div>\n        </div>\n    "); //C:\\Users\\amine\\Desktop\\web\\aurora-insumos\\imagenes\\productosImg\\

  card.innerHTML = contenido;
  return card;
};

var table = document.getElementById("products-container");

var listaProductos = function listaProductos() {
  var promise = new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/api/producto");
    console.log(http.response);
    http.send();
    console.log(http.response);

    http.onload = function () {
      var response = JSON.parse(http.response);

      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;
};

listaProductos().then(function (data) {
  console.log(data);
  data.forEach(function (producto) {
    var nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto, producto.idCategoria);
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
})["catch"](function (error) {
  return alert("error al agregar event listeners");
});
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
    viewButton.addEventListener('click', function (e) {
      console.log("the event for the button " + viewButton.getAttribute("name") + " works!");
      var productId = viewButton.getAttribute("name");
      console.log(productId); // OPCIÓN 1: traer de la BD la info de producto y mandarla por localStorage a la otra página

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
} // ADD TO CART


var itemCarrito = function itemCarrito(productImg, productName, productDesc, productPrice) {
  var card = document.createElement("div");
  card.className = "list-group-item p-3";
  card.setAttribute('style', "max-width:100px;");
  var contenido = "\n\n    <div class=\"row d-flex justify-content-center align-items-center\">\n        <div class=\"col-auto h-100\" style=\"max-width:100px;\" id=\"itemImage\">\n            <div class=\"d-flex justify-content-center align-items-center\" >\n                <img class=\"img-fluid h-100 rounded \"\n                    src=\"".concat(productImg, "\"\n                    alt=\"Acr\xEDlico Decorativo\">\n            </div>\n        </div>\n\n        <div class=\"col row\">\n\n            <div class=\"col-auto d-flex\" id=\"itemDesc\">\n                <div class=\"d-flex flex-column\" style=\"max-width:100px;\">\n                    <h6 class=\"productName\">").concat(productName, "</h6>\n                    <small class=\"productDesc text-muted\">").concat(productDesc, "</small>\n                    <small class=\"productPrice text-muted\">$").concat(productPrice, "</small>\n                </div>\n            </div>\n\n            <div class=\"col mt-3 d-flex flex-column justify-content-center align-items-center\"\n                style=\"min-width:110px;\">\n\n                <div class=\"d-flex align-items-center justify-content-center w-100\">\n\n                    <div class=\"input-group row d-flex align-items-center\" style=\"width: 100px;\">\n\n                        <span class=\"input-group-btn h-100 square-button\">\n                            <button type=\"button\"\n                                class=\"form-button btn minus d-flex justify-content-center align-items-center\"\n                                disabled=\"disabled\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                                    fill=\"currentColor\" class=\"bi bi-dash-lg\" viewBox=\"0 0 16 16\">\n                                    <path fill-rule=\"evenodd\"\n                                        d=\"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z\" />\n                                </svg>\n                            </button>\n                        </span>\n\n                        <div class=\"col\" style=\"min-width:40px;\">\n                            <input type=\"number\" class=\"form-control input-number text-center\" value=\"1\"\n                                min=\"1\">\n                        </div>\n\n                        <span class=\"input-group-btn h-100 square-button\">\n                            <button type=\"button\"\n                                class=\"form-button btn plus d-flex justify-content-center align-items-center\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                                    fill=\"currentColor\" class=\"bi bi-plus-lg\" viewBox=\"0 0 16 16\">\n                                    <path fill-rule=\"evenodd\"\n                                        d=\"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z\" />\n                                </svg>\n                            </button>\n                        </span>\n                    </div>\n\n                </div>\n\n                <div class=\"mt-1\">\n                    <span>$100,00 </span>\n                </div>\n\n            </div>\n\n\n        </div>\n\n        <div class=\"col-auto d-flex justify-content-center align-items-center\">\n            <div class=\"shrink-to-fit\">\n                <button type=\"button\"\n                    class=\"icon-button btn d-flex justify-content-center align-items-center\"\n                    style=\"width:20; height:20;\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                        class=\"bi bi-trash3-fill\" viewBox=\"0 0 16 16\">\n                        <path\n                            d=\"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z\" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n\n    </div>\n\n    ");
  card.innerHTML = contenido;
  return card;
};

function addEventToBuyButtons() {
  // this function takes all the "Comprar" buttons
  // and adds an event listener to each one
  var cart = document.getElementById("product-list");
  buyButtons = document.getElementsByClassName("buyButton");
  Array.prototype.slice.call(buyButtons).forEach(function (buyButton) {
    buyButton.addEventListener('click', function (e) {
      var button = e.target;
      var productCard = button.closest('.product-card'); // obtener la direccion de la imagen

      var productImg = productCard.querySelector('.card-img-top').getAttribute('src'); //obtener el id del producto

      productImg.replace(imageSource, '');
      var arraySplitted = productImg.split("/");
      var array2 = arraySplitted[4].split(".");
      var productId = array2[0]; //obtener el nombre del producto

      var productName = productCard.querySelector('.productName'); //obtener la desscripcion del producto

      var productDesc = productCard.querySelector('.productDesc'); //obtener el precio del producto

      var productPrice = productCard.querySelector('.productPrice');
      var productInfo = {
        productId: productId,
        productName: productName,
        productDesc: productDesc,
        productPrice: productPrice
      };

      var agregarItemAlCarrito = function agregarItemAlCarrito() {
        var promise = new Promise(function (resolve, reject) {
          localStorage.setItem(productInfo);
          resolve(response);
        });
        return promise;
      };
      /* 
      const newCartItem = itemCarrito(productImg, 0, 0, 0);
      console.log("🚀 ~ file: scriptProductos.js ~ line 366 ~ buyButton.addEventListener ~ newCartItem", newCartItem);
      cart.appendChild(newCartItem);
       */

    });
  });
} // add to cart


module.exports = null;
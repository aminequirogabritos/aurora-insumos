"use strict";

var minusButton = document.getElementById("minusButton");
var plusButton = document.getElementById("plusButton");
var productQuantity = document.getElementById("productQuantity");
var addToCartButton = document.getElementById("addToCartButton");
var productListDiv = document.getElementById("product-list");
var itemImageDiv = document.getElementById("itemImage");
var itemDescDiv = document.getElementById("itemDesc");
var productsListDiv = document.getElementById("product-list"); /////////////////////// PRODUCTO INDIVIDUAL ///////////////////////////////

var productId;
var stock;
var quantity;
var cart; //window.onload = function(){
// traer el id de producto de localStorage para poder buscarlo en la bd

productId = localStorage['productId'];
console.log(productId);
localStorage.removeItem('productId');
console.log(productId); //}

window.onbeforeunload = function () {
  //guardar id de producto antes de recargar
  localStorage.setItem('productId', productId);
}; //


minusButton.addEventListener('click', function (e) {
  // si el numero de productQuantity es mayor o igual a 1, decremento
  if (productQuantity.value > 1) {
    productQuantity.value = parseInt(productQuantity.value) - 1;
    if (productQuantity.value <= 1) minusButton.setAttribute('disabled', 'disabled');
    if (productQuantity.value < stock && plusButton.getAttribute('disabled')) plusButton.removeAttribute('disabled');
  }
});
plusButton.addEventListener('click', function (e) {
  // si hay stock, incremento
  if (parseInt(productQuantity.value) < stock) {
    productQuantity.value = parseInt(productQuantity.value) + 1;

    if (productQuantity.value > 1) {
      minusButton.removeAttribute('disabled');
    }

    if (productQuantity.value == stock) plusButton.setAttribute('disabled', 'disabled');
  }

  quantity = parseInt(productQuantity.value);
});
productQuantity.addEventListener('input', function (e) {
  // obtener stock de la DB
  var value = parseInt(productQuantity.value);
  if (productQuantity.value > stock) productQuantity.value = 1;

  if (productQuantity.value == stock) {
    plusButton.setAttribute('disabled', 'disabled');
    minusButton.removeAttribute('disabled');
  } else if (productQuantity.value == 1) {
    minusButton.setAttribute('disabled', 'disabled');
    plusButton.removeAttribute('disabled');
  }

  quantity = parseInt(productQuantity.value);
});

var cartItem = function cartItem(producto) {
  var card = document.createElement("div");
  card.className = "list-group-item p-3";
  card.style = "max-width:100px;";
  var contenido = "\n\n        <div class=\"row d-flex justify-content-center align-items-center\">\n            <!-- imagen -->\n            <div class=\"col-auto h-100\" style=\"max-width:100px;\" id=\"itemImage\">\n                <!-- imagen  -->\n                <div class=\"d-flex justify-content-center align-items-center\" >\n                    <img class=\"img-fluid h-100 rounded \"\n                    src=\"file://C:\\Users\\amine\\Desktop\\web\\aurora\\images\\".concat(producto.idProducto, ".jpg\"\n                    alt=\"Acr\xEDlico Decorativo\">\n                </div>\n            </div>\n\n            <div class=\"col row\">\n\n                <div class=\"col-auto d-flex\" id=\"itemDesc\">\n                    <!-- descripcion -->\n                        <div class=\"d-flex flex-column\" style=\"max-width:100px;\">\n                        <h6 class=\"\">").concat(producto.nombreProducto, "</h6>\n                        <small class=\"text-muted\">").concat(producto.descripcionProducto, "</small>\n                        <small class=\"text-muted\">$").concat(producto.precioProducto, "</small>\n                    </div>\n                    \n                </div>\n\n\n                <div class=\"col mt-3 d-flex flex-column justify-content-center align-items-center\"\n                    style=\"min-width:110px;\">\n\n                    <div class=\"d-flex align-items-center justify-content-center w-100\">\n\n                        <!-- cantidad -->\n                        <div class=\"input-group row d-flex align-items-center\" style=\"width: 100px;\">\n\n                            <span class=\"input-group-btn h-100 square-button\">\n                                <button type=\"button\"\n                                    class=\"form-button btn minus d-flex justify-content-center align-items-center\"\n                                    disabled=\"disabled\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                                        fill=\"currentColor\" class=\"bi bi-dash-lg\" viewBox=\"0 0 16 16\">\n                                        <path fill-rule=\"evenodd\"\n                                            d=\"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z\" />\n                                    </svg>\n                                </button>\n                            </span>\n\n                            <div class=\"col\" style=\"min-width:40px;\">\n                                <input type=\"number\" class=\"form-control input-number text-center\" value=\"1\"\n                                    min=\"1\">\n                            </div>\n\n                            <span class=\"input-group-btn h-100 square-button\">\n                                <button type=\"button\"\n                                    class=\"form-button btn plus d-flex justify-content-center align-items-center\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                                        fill=\"currentColor\" class=\"bi bi-plus-lg\" viewBox=\"0 0 16 16\">\n                                        <path fill-rule=\"evenodd\"\n                                            d=\"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z\" />\n                                    </svg>\n                                </button>\n                            </span>\n                        </div>\n\n                    </div>\n\n                    <div class=\"mt-1\">\n                        <!-- precio total -->\n                        <span>$100,00 </span>\n                    </div>\n\n                </div>\n\n\n            </div>\n\n            <div class=\"col-auto d-flex justify-content-center align-items-center\">\n                <!-- boton eliminar -->\n                <div class=\"shrink-to-fit\">\n                    <button type=\"button\"\n                        class=\"icon-button btn d-flex justify-content-center align-items-center\"\n                        style=\"width:20; height:20;\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                            class=\"bi bi-trash3-fill\" viewBox=\"0 0 16 16\">\n                            <path\n                                d=\"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z\" />\n                        </svg>\n                    </button>\n                </div>\n            </div>\n\n        </div>\n    ");
  card.innerHTML = contenido;
  return card;
};

var productListItemImage = function productListItemImage(producto) {
  var card = document.createElement("div");
  card.className = "d-flex justify-content-center align-items-center";
  var contenido = "\n    <img class=\"img-fluid h-100 rounded \"\n    src=\"file://C:\\Users\\amine\\Desktop\\web\\aurora\\images\\".concat(producto.idProducto, ".jpg\"\n    alt=\"Acr\xEDlico Decorativo\">\n    ");
  card.innerHTML = contenido;
  return card;
};

var productListItemDesc = function productListItemDesc(producto) {
  var card = document.createElement("div");
  card.className = "list-group-item p-3";
  card.style = "max-width:100px;";
  var contenido = "\n    <h6 class=\"\">".concat(producto.nombreProducto, "</h6>\n    <small class=\"text-muted\">").concat(producto.descripcionProducto, "</small>\n    <small class=\"text-muted\">$").concat(producto.precioProducto, "</small>\n    ");
  card.innerHTML = contenido;
  return card;
};

addToCartButton.addEventListener('click', function (e) {
  var productoIndividual = function productoIndividual() {
    var promise = new Promise(function (resolve, reject) {
      var http = new XMLHttpRequest();
      http.open("GET", "http://localhost:8080/api/producto/" + productId);
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

  productoIndividual().then(function (data) {
    console.log(productsListDiv);
    productsListDiv.appendChild(cartItem(data));
  })["catch"](function (error) {
    return alert("error!!!!!!!!!!!!");
  });
});

var productInfo = function productInfo(producto) {
  var card = document.createElement("div");
  var contenido = "\n\n        <h4 class=\"\">".concat(producto.nombreProducto, "\n        </h4>\n        <h5 class=\"text-muted\">").concat(producto.descripcionProducto, "</h5>\n        <h5 class=\"text-muted mb'3\">$").concat(producto.precioProducto, "</h5>\n\n        <small class=\"text-muted\">").concat(producto.stockProducto, " disponibles</small>\n\n    ");
  card.innerHTML = contenido;
  return card;
};

var productImage = function productImage(producto) {
  var card = document.createElement("div");
  var contenido = "\n\n        <img class=\"img-fluid rounded justify-content-center w-100\"\n            src=\"C:\\Users\\amine\\Desktop\\web\\aurora-insumos\\imagenes\\productosImg\\".concat(producto.idProducto, ".jpg\" alt=\"\">\n    ");
  card.innerHTML = contenido;
  return card;
};

var productInfoDiv = document.getElementById("product-info");
var productImageDiv = document.getElementById("product-image"); //      traer un producto de la bd      //

var productoIndividual = function productoIndividual() {
  var promise = new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/api/producto/" + productId);
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

productoIndividual().then(function (data) {
  productInfoDiv.appendChild(productInfo(data));
  productImageDiv.appendChild(productImage(data));
  stock = data.stockProducto;
})["catch"](function (error) {
  return alert("error!!!!!!!!!!!!");
}); //                                                         //
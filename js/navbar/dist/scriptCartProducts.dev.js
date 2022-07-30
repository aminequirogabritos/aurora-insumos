"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var scriptProductos = _interopRequireWildcard(require("../products/scriptProductos.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var itemCarrito = function itemCarrito(productImg, productName, productDesc, productPrice) {
  var card = document.createElement("div");
  card.className = "list-group-item p-3";
  card.setAttribute('style', "max-width:100px;");
  var contenido = "\n\n    <div class=\"row d-flex justify-content-center align-items-center\">\n        <div class=\"col-auto h-100\" style=\"max-width:100px;\" id=\"itemImage\">\n            <div class=\"d-flex justify-content-center align-items-center\" >\n                <img class=\"img-fluid h-100 rounded \"\n                    src=\"".concat(productImg, "\"\n                    alt=\"Acr\xEDlico Decorativo\">\n            </div>\n        </div>\n\n        <div class=\"col row\">\n\n            <div class=\"col-auto d-flex\" id=\"itemDesc\">\n                <div class=\"d-flex flex-column\" style=\"max-width:100px;\">\n                    <h6 class=\"\">").concat(productName, "</h6>\n                    <small class=\"text-muted\">").concat(productDesc, "</small>\n                    <small class=\"text-muted\">$").concat(productPrice, "</small>\n                </div>\n            </div>\n\n            <div class=\"col mt-3 d-flex flex-column justify-content-center align-items-center\"\n                style=\"min-width:110px;\">\n\n                <div class=\"d-flex align-items-center justify-content-center w-100\">\n\n                    <div class=\"input-group row d-flex align-items-center\" style=\"width: 100px;\">\n\n                        <span class=\"input-group-btn h-100 square-button\">\n                            <button type=\"button\"\n                                class=\"form-button btn minus d-flex justify-content-center align-items-center\"\n                                disabled=\"disabled\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                                    fill=\"currentColor\" class=\"bi bi-dash-lg\" viewBox=\"0 0 16 16\">\n                                    <path fill-rule=\"evenodd\"\n                                        d=\"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z\" />\n                                </svg>\n                            </button>\n                        </span>\n\n                        <div class=\"col\" style=\"min-width:40px;\">\n                            <input type=\"number\" class=\"form-control input-number text-center\" value=\"1\"\n                                min=\"1\">\n                        </div>\n\n                        <span class=\"input-group-btn h-100 square-button\">\n                            <button type=\"button\"\n                                class=\"form-button btn plus d-flex justify-content-center align-items-center\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                                    fill=\"currentColor\" class=\"bi bi-plus-lg\" viewBox=\"0 0 16 16\">\n                                    <path fill-rule=\"evenodd\"\n                                        d=\"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z\" />\n                                </svg>\n                            </button>\n                        </span>\n                    </div>\n\n                </div>\n\n                <div class=\"mt-1\">\n                    <span>$100,00 </span>\n                </div>\n\n            </div>\n\n\n        </div>\n\n        <div class=\"col-auto d-flex justify-content-center align-items-center\">\n            <div class=\"shrink-to-fit\">\n                <button type=\"button\"\n                    class=\"icon-button btn d-flex justify-content-center align-items-center\"\n                    style=\"width:20; height:20;\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                        class=\"bi bi-trash3-fill\" viewBox=\"0 0 16 16\">\n                        <path\n                            d=\"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z\" />\n                    </svg>\n                </button>\n            </div>\n        </div>\n\n    </div>\n\n    ");
  card.innerHTML = contenido;
  return card;
};

function addEventToBuyButtons() {
  // this function takes all the "Comprar" buttons
  // and adds an event listener to each one
  var cart = document.getElementById("product-list");
  console.log("🚀 ~ file: scriptProductos.js ~ line 344 ~ cart", cart);
  buyButtons = document.getElementsByClassName("buyButton");
  Array.prototype.slice.call(buyButtons).forEach(function (buyButton) {
    buyButton.addEventListener('click', function (e) {
      var button = e.target; //works

      var productCard = button.closest('.product-card');
      var productImg = productCard.querySelector('.card-img-top').getAttribute('src');
      /*             productImg.replace(scriptProductos.imageSource, '');
                  let arraySplitted = productImg.split("/")
                  let array2 = arraySplitted[4].split(".")
      
                  let productId = array2[0]; */

      var newCartItem = itemCarrito(productImg, 0, 0, 0);
      console.log("🚀 ~ file: scriptProductos.js ~ line 366 ~ buyButton.addEventListener ~ newCartItem", newCartItem);
      cart.appendChild(newCartItem);
    });
  });
}
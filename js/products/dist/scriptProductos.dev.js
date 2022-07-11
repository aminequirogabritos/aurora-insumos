"use strict";

/////////////////////// PRODUCTOS ///////////////////////////////
var crearNuevaLinea = function crearNuevaLinea(idProducto, nombreProducto, descripcionProducto, precioProducto) {
  var card = document.createElement("div");
  card.className = "mi_padding col-6 col-md-4 col-lg-3";
  var contenido = "\n        <div class=\"product-card card\">\n            <img class=\"card-img-top img-fluid\" src=\"".concat(idProducto, "\" alt=\"\">\n                <div class=\"card-body\">\n                    <h6 class=\"card-text text-center\">").concat(nombreProducto, "</h6>\n                    <h6 class=\"card-text text-muted text-center\">").concat(descripcionProducto, "</h6>\n\n                    <p class=\"card-text text-muted text-center\">$").concat(precioProducto, "</p>\n\n                    <div class=\"d-flex justify-content-evenly\">\n                        <button class=\"btn btn-block form-button mr-2\">Comprar</button>\n                        <button class=\"btn btn-block ver-button m-0\">Ver</button>\n                    </div>\n\n                </div>\n        </div>\n    ");
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
    var nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
    table.appendChild(nuevaLinea);
  });
})["catch"](function (error) {
  return alert("error!!!!!!!!!!!!");
});
/* 
            data.forEach(perfil => {
                const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
                table.appendChild(nuevaLinea);
            });
 */
"use strict";

/////////////////////// PRODUCTOS ///////////////////////////////
var crearNuevaLinea = function crearNuevaLinea(id, nombre, descripcion, precio) {
  var linea = document.createElement("div");
  var contenido = "\n    <div class=\"mi_padding col-6 col-md-4 col-lg-3\">\n        <div class=\"product-card card\">\n            <img class=\"card-img-top img-fluid\" src=\"".concat(id, "\" alt=\"\">\n                <div class=\"card-body\">\n                    <h6 class=\"card-text text-center\">").concat(nombre, "</h6>\n                    <h6 class=\"card-text text-center\">").concat(descripcion, "</h6>\n\n                    <p class=\"card-text text-muted text-center\">$").concat(precio, "</p>\n\n                    <div class=\"d-flex justify-content-evenly\">\n                        <button class=\"btn btn-block form-button mr-2\">Comprar</button>\n                        <button class=\"btn btn-block ver-button m-0\">Ver</button>\n                    </div>\n\n                </div>\n        </div>\n    </div>\n    ");
  linea.innerHTML = contenido;
  return linea;
};

var table = document.querySelector("[products-container]");

var listaProductos = function listaProductos() {
  var promise = new Promise(function (resolve, reject) {
    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/api/producto");
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

listaProductos().then(function (data) {
  console.log(data);
  data.forEach(function (producto) {
    var nuevaLinea = crearNuevaLinea(producto.id, producto.nombre, producto.descripcion, producto.precio);
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
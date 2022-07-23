"use strict";

/////////////////////// PRODUCTOS ///////////////////////////////
var viewButtons;

var crearNuevaLinea = function crearNuevaLinea(idProducto, nombreProducto, descripcionProducto, precioProducto) {
  var card = document.createElement("div");
  card.className = "mi_padding col-6 col-md-4 col-lg-3";
  var contenido = "\n        <div class=\"product-card card\">\n            <img class=\"card-img-top img-fluid\" src=\"C:\\Users\\amine\\Desktop\\web\\aurora-insumos\\imagenes\\productosImg\\".concat(idProducto, ".jpg\" alt=\"\">\n                <div class=\"card-body\">\n                    <h6 class=\"card-text text-center\">").concat(nombreProducto, "</h6>\n                    <h6 class=\"card-text text-muted text-center\">").concat(descripcionProducto, "</h6>\n\n                    <p class=\"card-text text-muted text-center\">$").concat(precioProducto, "</p>\n\n                    <div class=\"d-flex justify-content-evenly\">\n                        <button class=\"buyButton ").concat(idProducto, " btn btn-block form-button mr-2\" name=\"").concat(idProducto, "\" id=\"buyButton").concat(idProducto, "\">Comprar</button>\n                        <button class=\"viewButton ").concat(idProducto, " btn btn-block ver-button m-0\" name=\"").concat(idProducto, "\" id=\"viewButton").concat(idProducto, "\">Ver</button>\n                    </div>\n\n                </div>\n        </div>\n    ");
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
  /*     viewButtons = document.getElementsByClassName("viewButton");
      console.log(viewButtons); */
})["catch"](function (error) {
  return alert("error!!!!!!!!!!!!");
});
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
    table.innerHTML = "";
    data.forEach(function (producto) {
      if (producto.idCategoria == 1) {
        var nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
        table.appendChild(nuevaLinea);
      }
    });
    /*         viewButtons = document.getElementsByClassName("viewButton");
            console.log(viewButtons); */
  })["catch"](function (error) {
    return alert("error!!!!!!!!!!!!");
  });
});
fibroFacilCat.addEventListener('click', function () {
  //seleccionar productos con categoria decoupage (1)
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
    table.innerHTML = "";
    data.forEach(function (producto) {
      if (producto.idCategoria == 2) {
        var nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
        table.appendChild(nuevaLinea);
      }
    });
    /*         viewButtons = document.getElementsByClassName("viewButton");
            console.log(viewButtons); */
  })["catch"](function (error) {
    return alert("error!!!!!!!!!!!!");
  });
});
pinturasCat.addEventListener('click', function () {
  //seleccionar productos con categoria decoupage (1)
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
    table.innerHTML = "";
    data.forEach(function (producto) {
      if (producto.idCategoria == 3) {
        var nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
        table.appendChild(nuevaLinea);
      }
    });
    /*         viewButtons = document.getElementsByClassName("viewButton");
            console.log(viewButtons); */
  })["catch"](function (error) {
    return alert("error!!!!!!!!!!!!");
  });
});
stencylCat.addEventListener('click', function () {
  //seleccionar productos con categoria decoupage (1)
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
    table.innerHTML = "";
    data.forEach(function (producto) {
      if (producto.idCategoria == 4) {
        var nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
        table.appendChild(nuevaLinea);
      }
    });
    /*         viewButtons = document.getElementsByClassName("viewButton");
            console.log(viewButtons); */
  })["catch"](function (error) {
    return alert("error!!!!!!!!!!!!");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // wait till all the DOM is Loaded, since querying objects at this point they are not there yet.
  var viewButtons = document.getElementsByClassName("viewButton");
  console.log(viewButtons);
  /*     for (let viewButton of viewButtons) {
  
      }; */

  Array.from(viewButtons).forEach(function (viewButton) {
    viewButton.addEventListener('click', function (e) {
      console.log("this is another console log \n" + viewButton);
    });
  });
}); // go to individual product view
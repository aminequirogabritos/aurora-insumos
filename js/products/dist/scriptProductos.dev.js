"use strict";

/////////////////////// PRODUCTOS ///////////////////////////////
var imageSource;
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
  var contenido = "\n        <div class=\"product-card card\" >\n            <img class=\"card-img-top img-fluid\" src=\"C:\\Users\\amine\\Desktop\\web\\aurora-insumos\\imagenes\\productosImg\\".concat(idProducto, ".jpg\" alt=\"\">\n                <div class=\"card-body\">\n                    <h6 class=\"card-text text-center\">").concat(nombreProducto, "</h6>\n                    <h6 class=\"card-text text-muted text-center\">").concat(descripcionProducto, "</h6>\n\n                    <p class=\"card-text text-muted text-center\">$").concat(precioProducto, "</p>\n\n                    <div class=\"d-flex justify-content-evenly\">\n                        <button class=\"buyButton ").concat(idProducto, " btn btn-block form-button mr-2\" name=\"").concat(idProducto, "\" id=\"buyButton").concat(idProducto, "\">Comprar</button>\n                        <button class=\"viewButton ").concat(idProducto, " btn btn-block ver-button m-0\" name=\"").concat(idProducto, "\" id=\"viewButton").concat(idProducto, "\">Ver</button>\n                    </div>\n                </div>\n        </div>\n    ");
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
  return alert("error al traer als cards");
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


function addEventToBuyButtons() {
  // this function takes all the "Comprar" buttons
  // and adds an event listener to each one
  buyButtons = document.getElementsByClassName("buyButton");
  Array.prototype.slice.call(buyButtons).forEach(function (buyButton) {
    buyButton.addEventListener('click', function (e) {
      var button = e.target; //works

      var productCard = button.closest('.product-card');
      var productImg = productCard.querySelector('.card-img-top').getAttribute('src');
    });
  });
} // add to cart
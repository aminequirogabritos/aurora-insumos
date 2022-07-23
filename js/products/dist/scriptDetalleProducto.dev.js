"use strict";

var minusButton = document.getElementById("minusButton");
var plusButton = document.getElementById("plusButton");
var productQuantity = document.getElementById("productQuantity"); /////////////////////// PRODUCTO INDIVIDUAL ///////////////////////////////

minusButton.addEventListener('click', function (e) {
  /*
  var mysql = require('mysql');
  
          var con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "abc123",
              database: "PBSC_Parking_DB"
          });
      
          con.connect(function (err) {
              if (err) throw err;
              console.log("connected");
          });
      
          var sql = "??";
          con.query(sql, function (err, result) {
              if (err) {
                  throw err;
      
              }
      
              console.log(result.affectedRows + " record(s) updated");
          });
  */
  // si el numero de productQuantity es mayor o igual a 1, decremento
  var stock = 6;

  if (productQuantity.value > 1) {
    productQuantity.value = parseInt(productQuantity.value) - 1;
    if (productQuantity.value <= 1) minusButton.setAttribute('disabled', 'disabled');
    if (productQuantity.value < stock && plusButton.getAttribute('disabled')) plusButton.removeAttribute('disabled');
  }
});
plusButton.addEventListener('click', function (e) {
  /*  var mysql = require('mysql');
  
          var con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "abc123",
              database: "PBSC_Parking_DB"
          });
      
          con.connect(function (err) {
              if (err) throw err;
              console.log("connected");
          });
      
          var sql = "??";
          con.query(sql, function (err, result) {
              if (err) {
                  throw err;
      
              }
      
              console.log(result.affectedRows + " record(s) updated");
          }); */
  var stock = 6;
  /* var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('" + userName + "', '" + firstName + "','" + lastName + "','" + email + "','" + psw + "')"; */
  // si hay stock, incremento

  if (1 && parseInt(productQuantity.value) < stock) {
    productQuantity.value = parseInt(productQuantity.value) + 1;

    if (productQuantity.value > 1) {
      minusButton.removeAttribute('disabled');
    }

    if (productQuantity.value == stock) plusButton.setAttribute('disabled', 'disabled');
  }
});
productQuantity.addEventListener('input', function (e) {
  // obtener stock de la DB
  var stock = 6;
  var value = parseInt(productQuantity.value);
  /*     if (value <= 1){
          minusButton.setAttribute('disabled', 'disabled');
          productQuantity.value = 1;
      }
      else
          minusButton.removeAttribute('disabled'); */

  if (productQuantity.value > stock) productQuantity.value = 1;

  if (productQuantity.value == stock) {
    plusButton.setAttribute('disabled', 'disabled');
    minusButton.removeAttribute('disabled');
  } else if (productQuantity.value == 1) {
    minusButton.setAttribute('disabled', 'disabled');
    plusButton.removeAttribute('disabled');
  }
});

function saveAccount() {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abc123",
    database: "PBSC_Parking_DB"
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
  });
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var psw = document.getElementById("psw");
  var userName = document.getElementById("userName");
  var email = document.getElementById("inputText");
  var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('" + userName + "', '" + firstName + "','" + lastName + "','" + email + "','" + psw + "')";
  con.query(sql, function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result.affectedRows + " record(s) updated");
  });
} //      traer un producto de la bd


var mostrarProducto = function mostrarProducto(idProducto, nombreProducto, descripcionProducto, precioProducto) {
  var card = document.createElement("div");
  card.className = "mi_padding col-6 col-md-4 col-lg-3";
  var contenido = "\n    <div class=\"h-100 \">\n\n    <div class=\"menu d-flex justify-content-start flex-wrap mb-3\">\n        <a href=\"#\" class=\"link link-secondary\">Productos</a>\n        <p class=\"m-0 text-muted\"> > </p>\n        <a href=\"#\" class=\"link link-secondary\">Fibro Facil</a>\n        <p class=\"m-0 text-muted\"> > </p>\n        <a href=\"#\" class=\"link link-secondary\">Caja</a>\n    </div>\n\n\n\n    <div class=\"d-flex flex-column w-100 mb-3\">\n        <!-- descripcion -->\n        <h4 class=\"\">Cofre grande 18x14x15cm, acrilicos, servilleta de decoupage\n        </h4>\n        <h5 class=\"text-muted\"></h5>\n        <h5 class=\"text-muted mb'3\">$100</h5>\n\n        <small class=\"text-muted\">6 disponibles</small>\n    </div>\n\n    <div class=\" justify-content-center align-self-end w-100\">\n        <!-- cantidad -->\n        <div class=\"input-group  align-items-center\" style=\"min-width:110px;\">\n\n            <span class=\"input-group-btn h-100\">\n                <button type=\"button\" id=\"minusButton\"\n                    class=\"form-button btn minus d-flex justify-content-center align-items-center\"\n                    disabled=\"disabled\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                        fill=\"currentColor\" class=\"bi bi-dash-lg\" viewBox=\"0 0 16 16\">\n                        <path fill-rule=\"evenodd\"\n                            d=\"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z\" />\n                    </svg>\n                </button>\n            </span>\n\n            <div class=\"col\" style=\"min-width:40px;\">\n                <input type=\"number\" id=\"productQuantity\"\n                    class=\"form-control input-number text-center\" value=\"1\" min=\"1\"\n                    oninput=\"validity.valid||(value='');\">\n            </div>\n\n            <span class=\"input-Agroup-btn h-100\">\n                <button type=\"button\" id=\"plusButton\"\n                    class=\"form-button btn plus d-flex justify-content-center align-items-center\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\"\n                        fill=\"currentColor\" class=\"bi bi-plus-lg\" viewBox=\"0 0 16 16\">\n                        <path fill-rule=\"evenodd\"\n                            d=\"M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z\" />\n                    </svg>\n                </button>\n            </span>\n        </div>\n\n        <div class=\"botonComprar d-flex gap-2 justify-content-evenly\">\n            <button class=\"btn btn-block form-button\" type=\"submit\">Agregar al\n                carrito</button>\n        </div>\n\n    </div>\n\n</div>\n    ";
  card.innerHTML = contenido;
  return card;
};

var table = document.getElementById("product-container");

var productoIndividual = function productoIndividual() {
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

productoIndividual().then(function (data) {
  console.log(data);
  var productoInfo = mostrarProducto(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
  table.appendChild(productoInfo);
})["catch"](function (error) {
  return alert("error!!!!!!!!!!!!");
});
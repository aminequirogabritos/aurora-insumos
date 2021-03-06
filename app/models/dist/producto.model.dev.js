"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sql = require("./db.js"); // constructor

/* const Producto = function(producto) {

  this.id =  producto.id;
  this.nombre = producto.nombre;
  this.descripcion = producto.descripcion;
  this.precio = producto.precio;
  this.stock = producto.stock;
  this.idCategoria = producto.idCategoria;
  
}; */


function Producto(producto) {
  this.idProducto = producto.idProducto;
  this.nombreProducto = producto.nombreProducto;
  this.descripcionProducto = producto.descripcionProducto;
  this.precioProducto = producto.precioProducto;
  this.stockProducto = producto.stockProducto;
  this.idCategoria = producto.idCategoria;
}

; // create new product

/* Producto.prototype.create = function (newProducto, result) {
  sql.query("INSERT INTO producto SET ?", newProducto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created producto: ", { id: res.insertId, ...newProducto });
    result(null, { id: res.insertId, ...newProducto });
  });
}; */

Producto.createProducto = function (newProducto, result) {
  sql.query("INSERT INTO producto SET ?", newProducto, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created producto: ", _objectSpread({
      idProducto: res.insertId
    }, newProducto));
    result(null, _objectSpread({
      idProducto: res.insertId
    }, newProducto));
  });
}; // find Producto by id


Producto.findProductoById = function (id, result) {
  sql.query("SELECT * FROM producto WHERE idProducto = ?", [id], function (err, res) {
    console.log("THIS IS A MESSAGE, " + id);

    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found producto: ", res[0]);
      result(null, res[0]);
      return;
    } // not found Producto with the id


    result({
      kind: "not_found"
    }, null);
  });
};

Producto.getAllProductos = function (title, result) {
  var query = "SELECT * FROM producto";

  if (title) {
    query += " WHERE title LIKE '%".concat(title, "%'");
  }

  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("producto: ", res);
    result(null, res);
  });
};
/* Producto.getAllPublished = result => {
  sql.query("SELECT * FROM producto WHERE idCategoria=????", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("producto: ", res);
    result(null, res);
  });
}; */


Producto.updateProductoStockById = function (id, producto, result) {
  sql.query("UPDATE producto SET stock = ? WHERE id = ?", [producto.stock, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Producto with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("updated producto: ", _objectSpread({
      id: id
    }, producto));
    result(null, _objectSpread({
      id: id
    }, producto));
  });
};

Producto.removeProducto = function (id, result) {
  sql.query("DELETE FROM producto WHERE idProducto = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Producto with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted producto with id: ", id);
    result(null, res);
  });
};
/*
Producto.removeAll = result => {
  sql.query("DELETE FROM producto", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} producto`);
    result(null, res);
  });
};*/
///////////////////////////////////////////////////////
//////////      EXPORTACION PRODUCTO         //////////


module.exports = Producto; //////////                                   //////////
///////////////////////////////////////////////////////
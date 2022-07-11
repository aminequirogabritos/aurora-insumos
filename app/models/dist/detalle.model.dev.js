"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sql = require("./db.js"); // constructor

/* const Detalle = function(detalle) {

  this.id =  detalle.id;
  this.nombre = detalle.nombre;
  this.descripcion = detalle.descripcion;
  this.precio = detalle.precio;
  this.stock = detalle.stock;
  this.idCategoria = detalle.idCategoria;
  
}; */


function Detalle(detalle) {
  this.idDetalle = detalle.idDetalle;
  this.idVenta = detalle.idVenta;
  this.idProducto = detalle.idProducto;
  this.cantidadDetalle = detalle.cantidadDetalle;
  this.precioDetalle = detalle.precioDetalle;
}

; // create new product

/* Detalle.prototype.create = function (newDetalle, result) {
  sql.query("INSERT INTO detalle SET ?", newDetalle, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created detalle: ", { id: res.insertId, ...newDetalle });
    result(null, { id: res.insertId, ...newDetalle });
  });
}; */

Detalle.createDetalle = function (newDetalle, result) {
  sql.query("INSERT INTO detalle SET ?", newDetalle, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created detalle: ", _objectSpread({
      idDetalle: res.insertId
    }, newDetalle));
    result(null, _objectSpread({
      idDetalle: res.insertId
    }, newDetalle));
  });
}; // find Detalle by id


Detalle.findDetalleById = function (id, result) {
  sql.query("SELECT * FROM detalle WHERE idDetalle = ".concat(id), function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found detalle: ", res[0]);
      result(null, res[0]);
      return;
    } // not found Detalle with the id


    result({
      kind: "not_found"
    }, null);
  });
};

Detalle.getAllDetalles = function (title, result) {
  var query = "SELECT * FROM detalle";

  if (title) {
    query += " WHERE title LIKE '%".concat(title, "%'");
  }

  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("detalle: ", res);
    result(null, res);
  });
};
/* Detalle.getAllPublished = result => {
  sql.query("SELECT * FROM detalle WHERE idCategoria=????", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("detalle: ", res);
    result(null, res);
  });
}; */


Detalle.updateDetalleStockById = function (id, detalle, result) {
  sql.query("UPDATE detalle SET stock = ? WHERE id = ?", [detalle.stock, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Detalle with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("updated detalle: ", _objectSpread({
      id: id
    }, detalle));
    result(null, _objectSpread({
      id: id
    }, detalle));
  });
};
/* Detalle.removeDetalle = (id, result) => {
  sql.query("DELETE FROM detalle WHERE idDetalle = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Detalle with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted detalle with id: ", id);
    result(null, res);
  });
}; */

/*
Detalle.removeAll = result => {
  sql.query("DELETE FROM detalle", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} detalle`);
    result(null, res);
  });
};*/
///////////////////////////////////////////////////////
//////////      EXPORTACION PRODUCTO         //////////


module.exports = Detalle; //////////                                   //////////
///////////////////////////////////////////////////////
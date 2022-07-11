"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sql = require("./db.js"); // constructor

/* const Venta = function(venta) {

  this.id =  venta.id;
  this.nombre = venta.nombre;
  this.descripcion = venta.descripcion;
  this.precio = venta.precio;
  this.stock = venta.stock;
  this.idCategoria = venta.idCategoria;
  
}; */


function Venta(venta) {
  this.idVenta = venta.idVenta;
  this.idCliente = venta.idCliente;
  this.fechaVenta = venta.fechaVenta;
  this.formaPagoVenta = venta.formaPagoVenta;
  this.precioFinal = venta.precioFinal;
  this.isEntregadoVenta = venta.isEntregadoVenta;
  this.nombreRetira = venta.nombreRetira;
  this.apellidoRetira = venta.apellidoRetira;
}

; // create new product

/* Venta.prototype.create = function (newVenta, result) {
  sql.query("INSERT INTO venta SET ?", newVenta, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created venta: ", { id: res.insertId, ...newVenta });
    result(null, { id: res.insertId, ...newVenta });
  });
}; */

Venta.createVenta = function (newVenta, result) {
  sql.query("INSERT INTO venta SET ?", newVenta, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created venta: ", _objectSpread({
      idVenta: res.insertId
    }, newVenta));
    result(null, _objectSpread({
      idVenta: res.insertId
    }, newVenta));
  });
}; // find Venta by id


Venta.findVentaById = function (id, result) {
  sql.query("SELECT * FROM venta WHERE idVenta = ".concat(id), function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found venta: ", res[0]);
      result(null, res[0]);
      return;
    } // not found Venta with the id


    result({
      kind: "not_found"
    }, null);
  });
};

Venta.getAllVentas = function (title, result) {
  var query = "SELECT * FROM venta";

  if (title) {
    query += " WHERE title LIKE '%".concat(title, "%'");
  }

  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("venta: ", res);
    result(null, res);
  });
};
/* Venta.getAllPublished = result => {
  sql.query("SELECT * FROM venta WHERE idCategoria=????", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("venta: ", res);
    result(null, res);
  });
}; */


Venta.updateVentaStockById = function (id, venta, result) {
  sql.query("UPDATE venta SET stock = ? WHERE id = ?", [venta.stock, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Venta with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("updated venta: ", _objectSpread({
      id: id
    }, venta));
    result(null, _objectSpread({
      id: id
    }, venta));
  });
};
/* Venta.removeVenta = (id, result) => {
  sql.query("DELETE FROM venta WHERE idVenta = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Venta with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted venta with id: ", id);
    result(null, res);
  });
}; */

/*
Venta.removeAll = result => {
  sql.query("DELETE FROM venta", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} venta`);
    result(null, res);
  });
};*/
///////////////////////////////////////////////////////
//////////      EXPORTACION PRODUCTO         //////////


module.exports = Venta; //////////                                   //////////
///////////////////////////////////////////////////////
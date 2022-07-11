"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sql = require("./db.js"); // constructor

/* const Cliente = function(cliente) {

  this.id =  cliente.id;
  this.nombre = cliente.nombre;
  this.descripcion = cliente.descripcion;
  this.precio = cliente.precio;
  this.stock = cliente.stock;
  this.idCategoria = cliente.idCategoria;
  
}; */


function Cliente(cliente) {
  this.idCliente = cliente.idCliente;
  this.nombreCliente = cliente.nombreCliente;
  this.apellidoCliente = cliente.apellidoCliente;
  this.telefonoCliente = cliente.precioCltelefonoClienteiente;
  this.direccionCliente = cliente.direccionCliente;
  this.emailCliente = cliente.emailCliente;
  this.dniCliente = cliente.dniCliente;
}

; // create new product

/* Cliente.prototype.create = function (newCliente, result) {
  sql.query("INSERT INTO cliente SET ?", newCliente, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created cliente: ", { id: res.insertId, ...newCliente });
    result(null, { id: res.insertId, ...newCliente });
  });
}; */

Cliente.createCliente = function (newCliente, result) {
  sql.query("INSERT INTO cliente SET ?", newCliente, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created cliente: ", _objectSpread({
      idCliente: res.insertId
    }, newCliente));
    result(null, _objectSpread({
      idCliente: res.insertId
    }, newCliente));
  });
}; // find Cliente by id


Cliente.findClienteById = function (id, result) {
  sql.query("SELECT * FROM cliente WHERE idCliente = ".concat(id), function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found cliente: ", res[0]);
      result(null, res[0]);
      return;
    } // not found Cliente with the id


    result({
      kind: "not_found"
    }, null);
  });
};

Cliente.getAllClientes = function (title, result) {
  var query = "SELECT * FROM cliente";

  if (title) {
    query += " WHERE title LIKE '%".concat(title, "%'");
  }

  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("cliente: ", res);
    result(null, res);
  });
};
/* Cliente.getAllPublished = result => {
  sql.query("SELECT * FROM cliente WHERE idCategoria=????", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("cliente: ", res);
    result(null, res);
  });
}; */


Cliente.updateClienteStockById = function (id, cliente, result) {
  sql.query("UPDATE cliente SET stock = ? WHERE id = ?", [cliente.stock, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Cliente with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("updated cliente: ", _objectSpread({
      id: id
    }, cliente));
    result(null, _objectSpread({
      id: id
    }, cliente));
  });
};
/* Cliente.removeCliente = (id, result) => {
  sql.query("DELETE FROM cliente WHERE idCliente = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Cliente with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted cliente with id: ", id);
    result(null, res);
  });
}; */

/*
Cliente.removeAll = result => {
  sql.query("DELETE FROM cliente", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} cliente`);
    result(null, res);
  });
};*/
///////////////////////////////////////////////////////
//////////      EXPORTACION cliente         //////////


module.exports = Cliente; //////////                                   //////////
///////////////////////////////////////////////////////
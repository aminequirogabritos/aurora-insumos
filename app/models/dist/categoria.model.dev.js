"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sql = require("./db.js"); // constructor

/* const Categoria = function(categoria) {

  this.id =  categoria.id;
  this.nombre = categoria.nombre;
  this.descripcion = categoria.descripcion;
  this.precio = categoria.precio;
  this.stock = categoria.stock;
  this.idCategoria = categoria.idCategoria;
  
}; */


function Categoria(categoria) {
  this.idCategoria = categoria.idCategoria;
  this.nombreCategoria = categoria.nombreCategoria;
  this.descripcionCategoria = categoria.descripcionCategoria;
}

; // create new product

/* Categoria.prototype.create = function (newCategoria, result) {
  sql.query("INSERT INTO categoria SET ?", newCategoria, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created categoria: ", { id: res.insertId, ...newCategoria });
    result(null, { id: res.insertId, ...newCategoria });
  });
}; */

Categoria.createCategoria = function (newCategoria, result) {
  sql.query("INSERT INTO categoria SET ?", newCategoria, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created categoria: ", _objectSpread({
      idCategoria: res.insertId
    }, newCategoria));
    result(null, _objectSpread({
      idCategoria: res.insertId
    }, newCategoria));
  });
}; // find Categoria by id


Categoria.findCategoriaById = function (id, result) {
  sql.query("SELECT * FROM categoria WHERE idCategoria = ".concat(id), function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found categoria: ", res[0]);
      result(null, res[0]);
      return;
    } // not found Categoria with the id


    result({
      kind: "not_found"
    }, null);
  });
};

Categoria.getAllCategorias = function (title, result) {
  var query = "SELECT * FROM categoria";

  if (title) {
    query += " WHERE title LIKE '%".concat(title, "%'");
  }

  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("categoria: ", res);
    result(null, res);
  });
};
/* Categoria.getAllPublished = result => {
  sql.query("SELECT * FROM categoria WHERE idCategoria=????", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("categoria: ", res);
    result(null, res);
  });
}; */

/* Categoria.updateCategoriaStockById = (id, categoria, result) => {
  sql.query(
    "UPDATE categoria SET stock = ? WHERE id = ?",
    [categoria.stock, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Categoria with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated categoria: ", { id: id, ...categoria });
      result(null, { id: id, ...categoria });
    }
  );
}; */

/* Categoria.removeCategoria = (id, result) => {
    sql.query("DELETE FROM producto WHERE idCategoria = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Producto with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted categoria with id: ", id);
      result(null, res);
    });
  }; */

/*
Categoria.removeAll = result => {
  sql.query("DELETE FROM categoria", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} categoria`);
    result(null, res);
  });
}; */
///////////////////////////////////////////////////////
//////////      EXPORTACION PRODUCTO         //////////


module.exports = Categoria; //////////                                   //////////
///////////////////////////////////////////////////////
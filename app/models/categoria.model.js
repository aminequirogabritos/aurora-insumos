const sql = require("./db.js");
// constructor

/* const Categoria = function(categoria) {

  this.id =  categoria.id;
  this.nombre = categoria.nombre;
  this.descripcion = categoria.descripcion;
  this.precio = categoria.precio;
  this.stock = categoria.stock;
  this.idCategoria = categoria.idCategoria;
  
}; */

function Categoria(categoria) {

  this.idCategoria =  categoria.idCategoria;
  this.nombreCategoria = categoria.nombreCategoria;
  this.descripcionCategoria = categoria.descripcionCategoria
  
};

// create new product
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

Categoria.createCategoria = (newCategoria, result) => {
  sql.query("INSERT INTO categoria SET ?", newCategoria, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created categoria: ", { idCategoria: res.insertId, ...newCategoria });
    result(null, { idCategoria: res.insertId, ...newCategoria });
  });
};


  
// find Categoria by id
Categoria.findCategoriaById = (id, result) => {
  sql.query(`SELECT * FROM categoria WHERE idCategoria = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found categoria: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Categoria with the id
    result({ kind: "not_found" }, null);
  });
};


Categoria.getAllCategorias = (title, result) => {
  let query = "SELECT * FROM categoria";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
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

module.exports = Categoria;

//////////                                   //////////
///////////////////////////////////////////////////////

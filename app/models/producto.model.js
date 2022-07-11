const sql = require("./db.js");
// constructor

/* const Producto = function(producto) {

  this.id =  producto.id;
  this.nombre = producto.nombre;
  this.descripcion = producto.descripcion;
  this.precio = producto.precio;
  this.stock = producto.stock;
  this.idCategoria = producto.idCategoria;
  
}; */

function Producto(producto) {

  this.idProducto =  producto.idProducto;
  this.nombreProducto = producto.nombreProducto;
  this.descripcionProducto = producto.descripcionProducto;
  this.precioProducto = producto.precioProducto;
  this.stockProducto = producto.stockProducto;
  this.idCategoria = producto.idCategoria;
  
};

// create new product
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

Producto.createProducto = (newProducto, result) => {
  sql.query("INSERT INTO producto SET ?", newProducto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created producto: ", { idProducto: res.insertId, ...newProducto });
    result(null, { idProducto: res.insertId, ...newProducto });
  });
};


  
// find Producto by id
Producto.findProductoById = (id, result) => {
  sql.query(`SELECT * FROM producto WHERE idProducto = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found producto: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Producto with the id
    result({ kind: "not_found" }, null);
  });
};


Producto.getAllProductos = (title, result) => {
  let query = "SELECT * FROM producto";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
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

Producto.updateProductoStockById = (id, producto, result) => {
  sql.query(
    "UPDATE producto SET stock = ? WHERE id = ?",
    [producto.stock, id],
    (err, res) => {
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
      console.log("updated producto: ", { id: id, ...producto });
      result(null, { id: id, ...producto });
    }
  );
};

/* Producto.removeProducto = (id, result) => {
  sql.query("DELETE FROM producto WHERE idProducto = ?", id, (err, res) => {
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
    console.log("deleted producto with id: ", id);
    result(null, res);
  });
}; */

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

module.exports = Producto;

//////////                                   //////////
///////////////////////////////////////////////////////

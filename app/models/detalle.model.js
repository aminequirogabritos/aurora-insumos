const sql = require("./db.js");
// constructor

/* const Detalle = function(detalle) {

  this.id =  detalle.id;
  this.nombre = detalle.nombre;
  this.descripcion = detalle.descripcion;
  this.precio = detalle.precio;
  this.stock = detalle.stock;
  this.idCategoria = detalle.idCategoria;
  
}; */

function Detalle(detalle) {

  this.idDetalle =  detalle.idDetalle;
  this.idVenta = detalle.idVenta;
  this.idProducto = detalle.idProducto;
  this.cantidadDetalle = detalle.cantidadDetalle;
  this.precioDetalle = detalle.precioDetalle
  
};

// create new product
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

Detalle.createDetalle = (newDetalle, result) => {
  sql.query("INSERT INTO detalle SET ?", newDetalle, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created detalle: ", { idDetalle: res.insertId, ...newDetalle });
    result(null, { idDetalle: res.insertId, ...newDetalle });
  });
};


  
// find Detalle by id
Detalle.findDetalleById = (id, result) => {
  sql.query(`SELECT * FROM detalle WHERE idDetalle = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found detalle: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Detalle with the id
    result({ kind: "not_found" }, null);
  });
};


Detalle.getAllDetalles = (title, result) => {
  let query = "SELECT * FROM detalle";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
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

Detalle.updateDetalleStockById = (id, detalle, result) => {
  sql.query(
    "UPDATE detalle SET stock = ? WHERE id = ?",
    [detalle.stock, id],
    (err, res) => {
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
      console.log("updated detalle: ", { id: id, ...detalle });
      result(null, { id: id, ...detalle });
    }
  );
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

module.exports = Detalle;

//////////                                   //////////
///////////////////////////////////////////////////////

const sql = require("./db.js");
// constructor

/* const Cliente = function(cliente) {

  this.id =  cliente.id;
  this.nombre = cliente.nombre;
  this.descripcion = cliente.descripcion;
  this.precio = cliente.precio;
  this.stock = cliente.stock;
  this.idCategoria = cliente.idCategoria;
  
}; */

function Cliente(cliente) {

  this.idCliente =  cliente.idCliente;
  this.nombreCliente = cliente.nombreCliente;
  this.apellidoCliente = cliente.apellidoCliente;
  this.telefonoCliente = cliente.precioCltelefonoClienteiente;
  this.direccionCliente = cliente.direccionCliente;
  this.emailCliente = cliente.emailCliente;
  this.dniCliente = cliente.dniCliente;

  
};

// create new product
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

Cliente.createCliente = (newCliente, result) => {
  sql.query("INSERT INTO cliente SET ?", newCliente, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created cliente: ", { idCliente: res.insertId, ...newCliente });
    result(null, { idCliente: res.insertId, ...newCliente });
  });
};


  
// find Cliente by id
Cliente.findClienteById = (id, result) => {
  sql.query(`SELECT * FROM cliente WHERE idCliente = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found cliente: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Cliente with the id
    result({ kind: "not_found" }, null);
  });
};


Cliente.getAllClientes = (title, result) => {
  let query = "SELECT * FROM cliente";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  sql.query(query, (err, res) => {
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

Cliente.updateClienteStockById = (id, cliente, result) => {
  sql.query(
    "UPDATE cliente SET stock = ? WHERE id = ?",
    [cliente.stock, id],
    (err, res) => {
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
      console.log("updated cliente: ", { id: id, ...cliente });
      result(null, { id: id, ...cliente });
    }
  );
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

module.exports = Cliente;

//////////                                   //////////
///////////////////////////////////////////////////////

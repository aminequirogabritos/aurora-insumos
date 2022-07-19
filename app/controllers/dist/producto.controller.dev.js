"use strict";

var Producto = require("../models/producto.model.js"); // Create and Save a new Product


exports.createProducto = function (req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } // Create a Producto


  var producto = new Producto({
    idProducto: req.body.idProducto,
    nombreProducto: req.body.nombreProducto,
    descripcionProducto: req.body.descripcionProducto,
    precioProducto: req.body.precioProducto,
    stockProducto: req.body.stockProducto,
    idCategoria: req.body.idCategoria
  }); // Save product in the database

  Producto.createProducto(producto, function (err, data) {
    if (err) res.status(500).send({
      message: err.message || "Some error occurred while creating the Product."
    });else res.send(data);
  });
}; // Retrieve all Productos from the database (with condition).


exports.findAllProductos = function (req, res) {
  var title = req.query.title;
  Producto.getAllProductos(title, function (err, data) {
    if (err) res.status(500).send({
      message: err.message || "Some error occurred while retrieving productos."
    });else res.send(data);
  });
}; // Find a single Producto with a id


exports.findOneProducto = function (req, res) {
  Producto.findProductoById(req.params.id, function (err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Producto with id ".concat(req.params.id, ".")
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Producto with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
/* 
// find all published Productos
exports.findAllPublished = (req, res) => {
    Producto.getAllPublished((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving productos."
            });
        else res.send(data);
    });
};
 */
// Update a Producto identified by the id in the request


exports.updateProductoStock = function (req, res) {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);
  Producto.updateProductoStockById(req.params.id, new Producto(req.body), function (err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Producto with id ".concat(req.params.id, ".")
        });
      } else {
        res.status(500).send({
          message: "Error updating Producto with id " + req.params.id
        });
      }
    } else res.send(data);
  });
}; // Update a Producto identified by the id in the request

/* exports.updateProductoStock = (req, res) => {
    // Validate Request

    

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Producto.updateById(
        req.params.id,
        new Producto(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Producto with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Producto with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
}; */
// Delete a Producto with the specified id in the request


exports.deleteProducto = function (req, res) {
  Producto.removeProducto(req.params.id, function (err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Producto with id ".concat(req.params.id, ".")
        });
      } else {
        res.status(500).send({
          message: "Could not delete Producto with id " + req.params.id
        });
      }
    } else res.send({
      message: "Producto was deleted successfully!"
    });
  });
}; // Delete all Productos from the database.

/* exports.deleteAll = (req, res) => {
    Producto.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all productos."
            });
        else res.send({ message: `All Productos were deleted successfully!` });
    });
}; */
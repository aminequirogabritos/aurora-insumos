"use strict";

var Venta = require("../models/venta.model.js"); // Create and Save a new Product


exports.createVenta = function (req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } // Create a Venta


  var venta = new Venta({
    idVenta: req.body.idVenta,
    idCliente: req.body.idCliente,
    fechaVenta: req.body.fechaVenta,
    formaPagoVenta: req.body.formaPagoVenta,
    precioFinal: req.body.precioFinal,
    isEntregadoVenta: req.body.isEntregadoVenta,
    nombreRetira: req.body.nombreRetira,
    apellidoRetira: req.body.apellidoRetira
  }); // Save product in the database

  Venta.createVenta(venta, function (err, data) {
    if (err) res.status(500).send({
      message: err.message || "Some error occurred while creating the Product."
    });else res.send(data);
  });
}; // Retrieve all Ventas from the database (with condition).


exports.findAllVentas = function (req, res) {
  var title = req.query.title;
  Venta.getAllVentas(title, function (err, data) {
    if (err) res.status(500).send({
      message: err.message || "Some error occurred while retrieving ventas."
    });else res.send(data);
  });
}; // Find a single Venta with a id


exports.findOneVenta = function (req, res) {
  Venta.findVentaById(req.params.id, function (err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Venta with id ".concat(req.params.id, ".")
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Venta with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
/* 
// find all published Ventas
exports.findAllPublished = (req, res) => {
    Venta.getAllPublished((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ventas."
            });
        else res.send(data);
    });
};
 */
// Update a Venta identified by the id in the request


exports.updateVentaStock = function (req, res) {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);
  Venta.updateVentaStockById(req.params.id, new Venta(req.body), function (err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Venta with id ".concat(req.params.id, ".")
        });
      } else {
        res.status(500).send({
          message: "Error updating Venta with id " + req.params.id
        });
      }
    } else res.send(data);
  });
}; // Update a Venta identified by the id in the request

/* exports.updateVentaStock = (req, res) => {
    // Validate Request

    

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Venta.updateById(
        req.params.id,
        new Venta(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Venta with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Venta with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
}; */
// Delete a Venta with the specified id in the request

/* exports.deleteVenta = (req, res) => {
    Venta.removeVenta(req.params.idVenta, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Venta with id ${req.params.idVenta}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Venta with id " + req.params.idVenta
                });
            }
        } else res.send({ message: `Venta was deleted successfully!` });
    });
}; */
// Delete all Ventas from the database.

/* exports.deleteAll = (req, res) => {
    Venta.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ventas."
            });
        else res.send({ message: `All Ventas were deleted successfully!` });
    });
}; */
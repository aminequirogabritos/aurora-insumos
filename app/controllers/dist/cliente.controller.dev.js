"use strict";

var Cliente = require("../models/cliente.model.js"); // Create and Save a new Product


exports.createCliente = function (req, res) {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } // Create a Cliente


  var cliente = new Cliente({
    idCliente: req.body.idCliente,
    nombreCliente: req.body.nombreCliente,
    apellidoCliente: req.body.apellidoCliente,
    telefonoCliente: req.body.telefonoCliente,
    direccionCliente: req.body.direccionCliente,
    emailCliente: req.body.emailCliente,
    dniCliente: req.body.dniCliente
  }); // Save product in the database

  Cliente.createCliente(cliente, function (err, data) {
    if (err) res.status(500).send({
      message: err.message || "Some error occurred while creating the Product."
    });else res.send(data);
  });
}; // Retrieve all Clientes from the database (with condition).


exports.findAllClientes = function (req, res) {
  var title = req.query.title;
  Cliente.getAllClientes(title, function (err, data) {
    if (err) res.status(500).send({
      message: err.message || "Some error occurred while retrieving clientes."
    });else res.send(data);
  });
}; // Find a single Cliente with a id


exports.findOneCliente = function (req, res) {
  Cliente.findClienteById(req.params.id, function (err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Cliente with id ".concat(req.params.id, ".")
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Cliente with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};
/* 
// find all published Clientes
exports.findAllPublished = (req, res) => {
    Cliente.getAllPublished((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving clientes."
            });
        else res.send(data);
    });
};
 */
// Update a Cliente identified by the id in the request


exports.updateClienteStock = function (req, res) {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);
  Cliente.updateClienteStockById(req.params.id, new Cliente(req.body), function (err, data) {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Not found Cliente with id ".concat(req.params.id, ".")
        });
      } else {
        res.status(500).send({
          message: "Error updating Cliente with id " + req.params.id
        });
      }
    } else res.send(data);
  });
}; // Update a Cliente identified by the id in the request

/* exports.updateClienteStock = (req, res) => {
    // Validate Request

    

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Cliente.updateById(
        req.params.id,
        new Cliente(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Cliente with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Cliente with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
}; */
// Delete a Cliente with the specified id in the request

/* exports.deleteCliente = (req, res) => {
    Cliente.removeCliente(req.params.idCliente, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Cliente with id ${req.params.idCliente}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Cliente with id " + req.params.idCliente
                });
            }
        } else res.send({ message: `Cliente was deleted successfully!` });
    });
}; */
// Delete all Clientes from the database.

/* exports.deleteAll = (req, res) => {
    Cliente.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all clientes."
            });
        else res.send({ message: `All Clientes were deleted successfully!` });
    });
}; */
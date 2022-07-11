"use strict";

module.exports = function (app) {
  var clientes = require("../controllers/cliente.controller.js");

  var router = require("express").Router(); //Create new product


  router.post("/", clientes.createCliente); // Retrieve all Tutorials

  router.get("/", clientes.findAllClientes); //
  // Retrieve a single Tutorial with id

  router.get("/:id", clientes.findOneCliente); // Update a Product's stock with id

  router.put("/:id", clientes.updateClienteStock); //delete a product

  /*     router.delete("/:id". clientes.deleteCliente); */

  app.use('/api/cliente', router);
};
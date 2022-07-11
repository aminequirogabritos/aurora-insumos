"use strict";

module.exports = function (app) {
  var detalles = require("../controllers/detalle.controller.js");

  var router = require("express").Router(); //Create new product


  router.post("/", detalles.createDetalle); // Retrieve all Tutorials

  router.get("/", detalles.findAllDetalles); //
  // Retrieve a single Tutorial with id

  router.get("/:id", detalles.findOneDetalle); // Update a Product's stock with id

  router.put("/:id", detalles.updateDetalleStock); //delete a product

  /*     router.delete("/:id". detalles.deleteDetalle); */

  app.use('/api/detalle', router);
};
"use strict";

module.exports = function (app) {
  var ventas = require("../controllers/venta.controller.js");

  var router = require("express").Router(); //Create new product


  router.post("/", ventas.createVenta); // Retrieve all Tutorials

  router.get("/", ventas.findAllVentas); //
  // Retrieve a single Tutorial with id

  router.get("/:id", ventas.findOneVenta); // Update a Product's stock with id

  router.put("/:id", ventas.updateVentaStock); //delete a product

  /*     router.delete("/:id". ventas.deleteVenta); */

  app.use('/api/venta', router);
};
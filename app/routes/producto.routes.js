module.exports = app => {
    const productos = require("../controllers/producto.controller.js");
    var router = require("express").Router();

    //Create new product
    router.post("/", productos.createProducto);

    // Retrieve all Tutorials
    router.get("/", productos.findAllProductos); //

    // Retrieve a single Tutorial with id
    router.get("/:id", productos.findOneProducto);
    
    // Update a Product's stock with id
    router.put("/:id", productos.updateProductoStock);

    //delete a product
/*     router.delete("/:id". productos.deleteProducto); */
    
    app.use('/api/producto', router);

  };
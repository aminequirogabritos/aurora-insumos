module.exports = app => {
    const categorias = require("../controllers/categoria.controller.js");
    var router = require("express").Router();

    //Create new product
    router.post("/", categorias.createCategoria);

    // Retrieve all categorias
    router.get("/", categorias.findAllCategorias); //

    // Retrieve a single Tutorial with id
    router.get("/:id", categorias.findOneCategoria);
    
    // Update a categoria's stock with id
    router.put("/:id", categorias.updateCategoriaStock);

/*     
    //delete a categoria
    router.delete("/:id". categorias.deleteCategoria); */

    
    app.use('/api/categoria', router);

  };
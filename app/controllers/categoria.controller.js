const Categoria = require("../models/categoria.model.js");


// Create and Save a new Product
exports.createCategoria = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Categoria
    const categoria = new Categoria({
        idCategoria: req.body.idCategoria,
        nombreCategoria: req.body.nombreCategoria,
        descripcionCategoria: req.body.descripcionCategoria
    });
    // Save product in the database
    Categoria.createCategoria(categoria, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Product."
            });
        else res.send(data);
    });
};


// Retrieve all Categorias from the database (with condition).
exports.findAllCategorias = (req, res) => {
    const title = req.query.title;
    Categoria.getAllCategorias(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving categorias."
            });
        else res.send(data);
    });
};

// Find a single Categoria with a id
exports.findOneCategoria = (req, res) => {
    Categoria.findCategoriaById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Categoria with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Categoria with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};



/* 
// find all published Categorias
exports.findAllPublished = (req, res) => {
    Categoria.getAllPublished((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving categorias."
            });
        else res.send(data);
    });
};
 */


// Update a Categoria identified by the id in the request
exports.updateCategoriaStock = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Categoria.updateCategoriaStockById(
        req.params.id,
        new Categoria(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Categoria with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Categoria with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Update a Categoria identified by the id in the request
/* exports.updateCategoriaStock = (req, res) => {
    // Validate Request

    

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Categoria.updateById(
        req.params.id,
        new Categoria(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Categoria with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Categoria with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
}; */

// Delete a Categoria with the specified id in the request


/* exports.deleteCategoria = (req, res) => {
    Categoria.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Producto with id ${req.params.idCategoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Producto with id " + req.params.idCategoria
                });
            }
        } else res.send({ message: `Producto was deleted successfully!` });
    });
}; */

// Delete all Categorias from the database.
/* exports.deleteAll = (req, res) => {
    Categoria.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all categorias."
            });
        else res.send({ message: `All Categorias were deleted successfully!` });
    });
}; */
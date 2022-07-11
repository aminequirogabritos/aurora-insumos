const Detalle = require("../models/detalle.model.js");


// Create and Save a new Product
exports.createDetalle = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Detalle
    const detalle = new Detalle({
        idDetalle: req.body.idDetalle,
        idVenta: req.body.idVenta,
        idProducto: req.body.idProducto,
        cantidadDetalle: req.body.cantidadDetalle,
        precioDetalle: req.body.precioDetalle
    });
    // Save product in the database
    Detalle.createDetalle(detalle, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Detalle."
            });
        else res.send(data);
    });
};


// Retrieve all Detalles from the database (with condition).
exports.findAllDetalles = (req, res) => {
    const title = req.query.title;
    Detalle.getAllDetalles(title, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving detalles."
            });
        else res.send(data);
    });
};

// Find a single Detalle with a id
exports.findOneDetalle = (req, res) => {
    Detalle.findDetalleById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Detalle with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Detalle with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};



/* 
// find all published Detalles
exports.findAllPublished = (req, res) => {
    Detalle.getAllPublished((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving detalles."
            });
        else res.send(data);
    });
};
 */


// Update a Detalle identified by the id in the request
exports.updateDetalleStock = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Detalle.updateDetalleStockById(
        req.params.id,
        new Detalle(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Detalle with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Detalle with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Update a Detalle identified by the id in the request
/* exports.updateDetalleStock = (req, res) => {
    // Validate Request

    

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Detalle.updateById(
        req.params.id,
        new Detalle(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Detalle with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Detalle with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
}; */

// Delete a Detalle with the specified id in the request
/* exports.deleteDetalle = (req, res) => {
    Detalle.removeDetalle(req.params.idDetalle, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Detalle with id ${req.params.idDetalle}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Detalle with id " + req.params.idDetalle
                });
            }
        } else res.send({ message: `Detalle was deleted successfully!` });
    });
}; */

// Delete all Detalles from the database.
/* exports.deleteAll = (req, res) => {
    Detalle.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all detalles."
            });
        else res.send({ message: `All Detalles were deleted successfully!` });
    });
}; */
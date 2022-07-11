/* run once */


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "aurorainsumosDB"
});


/* 

CREAR TABLA CATEGORIA

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS `aurorainsumosdb`.`Categoria` (" +
    "  `idCategoria` INT NOT NULL," +
    "  `nombreCategoria` VARCHAR(25) NOT NULL," +
    "  `descripcionCategoria` VARCHAR(55) NULL," +
    "  PRIMARY KEY (`idCategoria`)," +
    "  UNIQUE INDEX `idCategoria_UNIQUE` (`idCategoria` ASC) VISIBLE," +
    "  UNIQUE INDEX `nombreCategoria_UNIQUE` (`nombreCategoria` ASC) VISIBLE)" +
    "ENGINE = InnoDB;";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Producto created");
  });
});

 */

/*

CREAR TABLA PRODUCTO

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS `aurorainsumosdb`.`Producto` (" +
    "  `idProducto` VARCHAR(100) NOT NULL," +
    "  `nombreProducto` VARCHAR(25) NOT NULL," +
    "  `descripcionProducto` VARCHAR(45) NULL," +
    "  `precioProducto` INT NOT NULL," +
    "  `stockProducto` INT NOT NULL," +
    "  `idCategoria` INT NOT NULL," +
    "  PRIMARY KEY (`idProducto`)," +
    "  UNIQUE INDEX `idProducto_UNIQUE` (`idProducto` ASC) VISIBLE," +
    "  UNIQUE INDEX `nombreProducto_UNIQUE` (`nombreProducto` ASC) VISIBLE," +
    "  INDEX `idCategoria_idx` (`idCategoria` ASC) VISIBLE," +
    "  CONSTRAINT `idCategoria`" +
    "    FOREIGN KEY (`idCategoria`)" +
    "    REFERENCES `aurorainsumosdb`.`Categoria` (`idCategoria`)" +
    "    ON DELETE CASCADE" +
    "    ON UPDATE CASCADE)" +
    "ENGINE = InnoDB;";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Producto created");
  });
}); */



/* 
// CREAR TABLA CLIENTE

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS `aurorainsumosdb`.`Cliente` (" +
    "  `idCliente` INT NOT NULL," +
    "  `nombreCliente` VARCHAR(35) NOT NULL," +
    "  `apellidoCliente` VARCHAR(35) NOT NULL," +
    "  `telefonoCliente` INT NOT NULL," +
    "  `direccionCliente` VARCHAR(45) NOT NULL," +
    "  `emailCliente` VARCHAR(45) NOT NULL," +
    "  `dniCliente` VARCHAR(45) NOT NULL," +
    "  PRIMARY KEY (`idCliente`)," +
    "  UNIQUE INDEX `idCliente_UNIQUE` (`idCliente` ASC) VISIBLE," +
    "  UNIQUE INDEX `emailCliente_UNIQUE` (`emailCliente` ASC) VISIBLE," +
    "  UNIQUE INDEX `dniCliente_UNIQUE` (`dniCliente` ASC) VISIBLE)" +
    "ENGINE = InnoDB;";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table cliehjte created");
  });
});
 */




// CREAR TABLA VENTA
/* 
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS `aurorainsumosdb`.`Venta` (" +
    "  `idVenta` INT NOT NULL AUTO_INCREMENT," +
    "  `idCliente` INT NOT NULL," +
    "  `fechaVenta` DATE NOT NULL," +
    "  `formaPagoVenta` INT NOT NULL," +
    "  `precioFinal` DOUBLE NOT NULL," +
    "  `isEntregadoVenta` TINYINT NOT NULL," +
    "  `nombreRetira` VARCHAR(45) NULL," +
    "  `apellidoRetira` VARCHAR(45) NULL," +
    "  PRIMARY KEY (`idVenta`)," +
    "  UNIQUE INDEX `idFactura_UNIQUE` (`idVenta` ASC) VISIBLE," +
    "  UNIQUE INDEX `idCliente_UNIQUE` (`idCliente` ASC) VISIBLE," +
    "  CONSTRAINT `idCliente`" +
    "    FOREIGN KEY (`idCliente`)" +
    "    REFERENCES `aurorainsumosdb`.`Cliente` (`idCliente`)" +
    "    ON DELETE CASCADE" +
    "    ON UPDATE CASCADE)" +
    "ENGINE = InnoDB;";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table venta created");
  });
}); */


// CREAR TABLA detalle

/* con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS `aurorainsumosdb`.`Detalle` (" +
    "  `idDetalle` INT NOT NULL AUTO_INCREMENT," +
    "  `idVenta` INT NOT NULL," +
    "  `idProducto` VARCHAR(100) NOT NULL," +
    "  `cantidadDetalle` INT NOT NULL," +
    "  `precioDetalle` INT NOT NULL," +
    "  PRIMARY KEY (`idDetalle`)," +
    "  UNIQUE INDEX `idDetalleCompra_UNIQUE` (`idDetalle` ASC) VISIBLE," +
    "  UNIQUE INDEX `idFactura_UNIQUE` (`idVenta` ASC) VISIBLE," +
    "  UNIQUE INDEX `idProducto_UNIQUE` (`idProducto` ASC) VISIBLE," +
    "  CONSTRAINT `idFactura`" +
    "    FOREIGN KEY (`idVenta`)" +
    "    REFERENCES `aurorainsumosdb`.`Venta` (`idVenta`)" +
    "    ON DELETE CASCADE" +
    "    ON UPDATE CASCADE," +
    "  CONSTRAINT `idProducto`" +
    "    FOREIGN KEY (`idProducto`)" +
    "    REFERENCES `aurorainsumosdb`.`Producto` (`idProducto`)" +
    "    ON DELETE NO ACTION" +
    "    ON UPDATE NO ACTION)" +
    "ENGINE = InnoDB";;

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table detalle created");
  });
}); */









/* con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE venta;";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table venta deleted");
  });
}); */


/* con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql ="select * from producto;";

  con.query(sql, function (err, result) {
    console.log(result);
    if (err) throw err;
    console.log("Table Producto created");
  });
}); */


/* con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql ="delete from producto where idCategoria=3;";

  con.query(sql, function (err, result) {
    console.log(result);
    if (err) throw err;
    console.log("Table Producto updated");
  });
}); */
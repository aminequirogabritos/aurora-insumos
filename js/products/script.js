var minusButton = document.getElementById("minusButton");
var plusButton = document.getElementById("plusButton");
var productQuantity = document.getElementById("productQuantity");

/////////////////////// PRODUCTO INDIVIDUAL ///////////////////////////////

minusButton.addEventListener('click', (
    function (e) {

        /*  var mysql = require('mysql');
        
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "abc123",
                    database: "PBSC_Parking_DB"
                });
            
                con.connect(function (err) {
                    if (err) throw err;
                    console.log("connected");
                });
            
                var sql = "??";
                con.query(sql, function (err, result) {
                    if (err) {
                        throw err;
            
                    }
            
                    console.log(result.affectedRows + " record(s) updated");
                }); */

        // si el numero de productQuantity es mayor o igual a 1, decremento

        if (productQuantity.value > 1) {
            productQuantity.value = parseInt(productQuantity.value) - 1;

            if (productQuantity.value <= 1)
                minusButton.setAttribute('disabled', 'disabled');

        }
    }
)
)

plusButton.addEventListener('click', (
    function (e) {

        /*  var mysql = require('mysql');
        
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "abc123",
                    database: "PBSC_Parking_DB"
                });
            
                con.connect(function (err) {
                    if (err) throw err;
                    console.log("connected");
                });
            
                var sql = "??";
                con.query(sql, function (err, result) {
                    if (err) {
                        throw err;
            
                    }
            
                    console.log(result.affectedRows + " record(s) updated");
                }); */

        var stock = "";

        /* var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('" + userName + "', '" + firstName + "','" + lastName + "','" + email + "','" + psw + "')"; */

        // si hay stock, incremento

        if (1 /* && HAY STOCK*/) {
            productQuantity.value = parseInt(productQuantity.value) + 1;

            if (productQuantity.value > 1) {
                minusButton.removeAttribute('disabled');
            }

            if (0 /* productQuantity.value == "stock" */)
                plusButton.setAttribute('disabled', 'disabled');
        }
    }
)
)



productQuantity.addEventListener('input', function (e) {

    // obtener stock de la DB

    var value = parseInt(productQuantity.value);

    if (value <= 1){
        minusButton.setAttribute('disabled', 'disabled');
        value = 1;
    }
    else
        minusButton.removeAttribute('disabled');

    if (0 /* productQuantity.value == "stock" */)
        plusButton.setAttribute('disabled', 'disabled');

}
)








function saveAccount() {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "abc123",
        database: "PBSC_Parking_DB"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");
    });

    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var psw = document.getElementById("psw");
    var userName = document.getElementById("userName");
    var email = document.getElementById("inputText");

    var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('" + userName + "', '" + firstName + "','" + lastName + "','" + email + "','" + psw + "')";


    con.query(sql, function (err, result) {
        if (err) {
            throw err;

        }

        console.log(result.affectedRows + " record(s) updated");
    });
}


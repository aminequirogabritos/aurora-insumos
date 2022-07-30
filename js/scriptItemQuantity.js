

// FUNCIONES PARA MANEJAR BOTONES DE MÁS Y MENOS


// como en el carrito los items se crean de forma dinamica, hay que agregar
// event listeners despues de crearlos

var stockProducto;

export default function addEventToItemQuantityButtons(html, productId) {

    var minusButton = html.getElementById(`minusButton${productId}`);
    var plusButton = html.getElementById(`plusButton${productId}`);
    var productQuantity = html.getElementById(`productQuantity${productId}`);
    var quantity;



    minusButton.addEventListener('click', (
        function (e) {

            //obtener maximo de input determinado por stock
            var div1 = minusButton.closest(".input-group");
            var input = div1.querySelector("[name='productQuantity']");
            var stock = parseInt(input.getAttribute('max'));

            //obtener precio total
            var div2 = minusButton.closest(".col-6");
            var totalPriceSpan = div2.querySelector("[name='productTotalPrice']");
            var totalPriceString = totalPriceSpan.innerHTML;
            var totalPriceArray = totalPriceString.split('$');
            var totalPrice = parseInt(totalPriceArray[1]);

            //obtener precio individual
            var div3 = minusButton.closest(".list-group-item");
            var priceSpan = div3.querySelector("[id='productPrice']");
            var priceString = priceSpan.innerHTML;
            var priceArray = priceString.split('$');
            var price = parseInt(priceArray[1]);

            // si el numero de productQuantity es mayor o igual a 1, decremento
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;

                if (input.value <= 1)
                    minusButton.setAttribute('disabled', 'disabled');

                if (input.value < stock && plusButton.getAttribute('disabled'))
                    plusButton.removeAttribute('disabled');
            }

            //update price
            totalPriceSpan.innerHTML = "$" + (input.value * price);
        }
    )
    )

    plusButton.addEventListener('click', (
        function (e) {

            //obtener maximo de input determinado por stock
            var div1 = plusButton.closest(".input-group");
            var input = div1.querySelector("[name='productQuantity']");
            var stock = parseInt(input.getAttribute('max'));

            //obtener precio total
            var div2 = plusButton.closest(".col-6");
            var totalPriceSpan = div2.querySelector("[name='productTotalPrice']");
            var totalPriceString = totalPriceSpan.innerHTML;
            var totalPriceArray = totalPriceString.split('$');
            var totalPrice = parseInt(totalPriceArray[1]);

            //obtener precio individual
            var div3 = plusButton.closest(".list-group-item");
            var priceSpan = div3.querySelector("[id='productPrice']");
            var priceString = priceSpan.innerHTML;
            var priceArray = priceString.split('$');
            var price = parseInt(priceArray[1]);

            // si hay stock, incremento
            if (parseInt(input.value) < stock) {
                input.value = parseInt(input.value) + 1;

                if (input.value > 1) {
                    minusButton.removeAttribute('disabled');
                }

                if (input.value == stock)
                    plusButton.setAttribute('disabled', 'disabled');
            }/* 
            quantity = parseInt(input.value); */

            //update price
            totalPriceSpan.innerHTML = "$" + (input.value * price);

        }
    )
    )


    productQuantity.addEventListener('input', function (e) {

        // obtener stock de la DB

        //obtener maximo de input determinado por stock
        var stock = parseInt(productQuantity.getAttribute('max').value);

        //obtener precio total
        var div2 = plusButton.closest(".col-6");
        var totalPriceSpan = div2.querySelector("[name='productTotalPrice']");
        var totalPriceString = totalPriceSpan.innerHTML;
        var totalPriceArray = totalPriceString.split('$');
        var totalPrice = parseInt(totalPriceArray[1]);

        //obtener precio individual
        var div3 = plusButton.closest(".list-group-item");
        var priceSpan = div3.querySelector("[id='productPrice']");
        var priceString = priceSpan.innerHTML;
        var priceArray = priceString.split('$');
        var price = parseInt(priceArray[1]);

        if (productQuantity.value > stock)
            productQuantity.value = 1;

        if (productQuantity.value == stock) {
            plusButton.setAttribute('disabled', 'disabled');
            minusButton.removeAttribute('disabled');
        }
        else if (productQuantity.value == 1) {
            minusButton.setAttribute('disabled', 'disabled');
            plusButton.removeAttribute('disabled');
        }/* 
        quantity = parseInt(productQuantity.value); */

        //update price
        totalPriceSpan.innerHTML = "$" + (input.value * price);
        // NO FUNCIONA
        // el precio total no cambia al modificar el imput por teclado
    }

    )

}





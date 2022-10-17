

//import * as imp from '../../partePDF/crearFactura.js';


const submitInfoButton = document.getElementById('submitInfo');
/* 
submitInfoButton.addEventListener('click', (event) => {
    event.preventDefault();

    // obtenemos la info de los productos y generamos el string 
    // para enviarlo a localStorage

    const carritoSideBarItems = document.querySelectorAll(".carritoItem");

    var array = [];

    carritoSideBarItems.forEach(item => {
        const itemPriceElement = item.querySelector(".itemPrice2");
        const itemPrice = Number(itemPriceElement.textContent.replace('$', ''));
        const itemName = item.querySelector(".itemName").textContent;
        const itemQuantity = item.querySelector(".itemQuantity").textContent.replace(' x','');

        var arrayItem = {
            nombre: itemName,
            cantidad: itemQuantity,
            precio: itemPrice,
        }

        array.push(arrayItem);

    });

    console.log(array);

    const stringJSON = JSON.stringify(array);
    console.log("🌸 ~ file: graciasPorSuCompra.js ~ line 35 ~ submitInfoButton.addEventListener ~ stringJSON", stringJSON);

    localStorage.setItem('cartItems',stringJSON);

    location.href = "../../html/graciasPorSuCompra/graciasPorSuCompra.html";


})
 
 */
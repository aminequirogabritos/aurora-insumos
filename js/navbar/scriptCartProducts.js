//import * as scriptProductos from "../products/scriptProductos.js";

var imageSource = '../../imagenes/productosImg/';

var botonIniciarCompra;
/*
const item = localStorage.getItem('addItemToCart');
console.log("🌸 ~ file: scriptCartProducts.js ~ line 110 ~ addItemToCart ~ item", item);

// funcion para agregar item al carrito
function addItemToCart () {
    const item = localStorage.getItem('addItemToCart');
    console.log("🌸 ~ file: scriptCartProducts.js ~ line 110 ~ addItemToCart ~ item", item);
} */

// boton iniciar compra




document.body.addEventListener('click', function (event) {
    if (event.target.id == 'botonIniciarCompra') {

            let array = guardarValoresEnArreglo();

            const stringJSON = JSON.stringify(array);

            // cargar el string en localstorage
            localStorage.setItem('cartItems', stringJSON);

            const total = Number(document.querySelector("#totalCarritoSideBar").textContent.replace('$', ''));

            localStorage.setItem('total', total);


    };
});


function getProductId(productImg) {
    //obtener el id del producto
    productImg.replace(imageSource, '');
    let arraySplitted = productImg.split("/")
    let array2 = arraySplitted[4].split(".")
    return array2[0];

};

function guardarValoresEnArreglo() {

    var carritoSideBarItems = document.querySelectorAll(".carritoItem");

    let array = [];

    carritoSideBarItems.forEach(item => {
        const aux = item.querySelector(".itemImg").getAttribute("src");
        const itemId = getProductId(aux);
        const itemQuantityElement = item.querySelector(".itemQuantity");

        let item1 = {
            itemId: itemId,
            itemQuantity: itemQuantityElement.value
        }

        array.push(item1);

    });

    return array;

};

/* funcion que actualizara el total del carrito sideBar cada vez que se agregue o quite un producto */
function updateTotalPrizeCart() {
    let total = 0;
    const totalCarritoSideBar = document.querySelector("#totalCarritoSideBar");

    const carritoSideBarItems = document.querySelectorAll(".carritoItem");

    carritoSideBarItems.forEach(item => {
        const itemPriceElement = item.querySelector(".itemPrice");
        const itemPrice = Number(itemPriceElement.textContent.replace('$', ''));
        total = total + (itemPrice);
    });

    totalCarritoSideBar.innerHTML = `$${total.toFixed(2)}`;
};

/* funcion que sirve para eliminar un item del carrito sidebar
nota: estas funciones creadas nuevas hay que agregarlas en otro lado haciendo
uso del addEventListener */

function addEventToRemoveItemCarrito(html, productId) {
    var removeButton = html.getElementById(`removeButton${productId}`);

    removeButton.addEventListener('click', (
        function (event) {
            const buttonClicked = event.target;
            buttonClicked.closest(".carritoItem").remove();
            updateTotalPrizeCart();
        }
    ))
}


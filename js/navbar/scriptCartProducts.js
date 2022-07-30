
//import * as scriptProductos from "../products/scriptProductos.js";


const itemCarrito = (productImg, productName, productDesc, productPrice) => {

    const card = document.createElement("div");
    card.className = "list-group-item p-3";
    card.setAttribute('style', "max-width:100px;");


    const contenido = `

    <div class="row d-flex justify-content-center align-items-center">
        <div class="col-auto h-100" style="max-width:100px;" id="itemImage">
            <div class="d-flex justify-content-center align-items-center" >
                <img class="img-fluid h-100 rounded "
                    src="${productImg}"
                    alt="Acrílico Decorativo">
            </div>
        </div>

        <div class="col row">

            <div class="col-auto d-flex" id="itemDesc">
                <div class="d-flex flex-column" style="max-width:100px;">
                    <h6 class="">${productName}</h6>
                    <small class="text-muted">${productDesc}</small>
                    <small class="text-muted">$${productPrice}</small>
                </div>
            </div>

            <div class="col mt-3 d-flex flex-column justify-content-center align-items-center"
                style="min-width:110px;">

                <div class="d-flex align-items-center justify-content-center w-100">

                    <div class="input-group row d-flex align-items-center" style="width: 100px;">

                        <span class="input-group-btn h-100 square-button">
                            <button type="button"
                                class="form-button btn minus d-flex justify-content-center align-items-center"
                                disabled="disabled">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                </svg>
                            </button>
                        </span>

                        <div class="col" style="min-width:40px;">
                            <input type="number" class="form-control input-number text-center" value="1"
                                min="1">
                        </div>

                        <span class="input-group-btn h-100 square-button">
                            <button type="button"
                                class="form-button btn plus d-flex justify-content-center align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </button>
                        </span>
                    </div>

                </div>

                <div class="mt-1">
                    <span>$100,00 </span>
                </div>

            </div>


        </div>

        <div class="col-auto d-flex justify-content-center align-items-center">
            <div class="shrink-to-fit">
                <button type="button"
                    class="icon-button btn d-flex justify-content-center align-items-center"
                    style="width:20; height:20;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path
                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </button>
            </div>
        </div>

    </div>

    `;


    card.innerHTML = contenido;
    return card;



}

const item = localStorage.getItem('addItemToCart');
console.log("🌸 ~ file: scriptCartProducts.js ~ line 110 ~ addItemToCart ~ item", item);


function addItemToCart() {

    const item = localStorage.getItem('addItemToCart');
    console.log("🌸 ~ file: scriptCartProducts.js ~ line 110 ~ addItemToCart ~ item", item);
    


}


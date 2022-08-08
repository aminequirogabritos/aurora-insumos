



const anotherPersonDiv = document.getElementById("anotherPersonDiv");
const continueToPaymentButton = document.getElementById("continueToPaymentButton");
const receiptInfoDiv = document.getElementById("receiptInfoDiv");
/* const paymentInfoDiv = document.getElementById("paymentInfoDiv"); */
const deliveryInfoDiv = document.getElementById("deliveryInfoDiv");
const receiptInfoForm = document.getElementById("receiptInfoForm");
/* const paymentInfoForm = document.getElementById("paymentInfoForm"); */
const goBackToDelivery = document.getElementById("goBackToDelivery");
const checkoutDiv = document.getElementById("checkoutDiv");
const homeDelivery = document.getElementById("homeDelivery");
const submitInfoButton = document.getElementById("submitInfo");


// forms info
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const number = document.getElementById("number");
const address = document.getElementById("address");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const anotherPersonCheck = document.getElementById("anotherPersonCheck");
const firstNameAnotherPerson = document.getElementById("firstNameAnotherPerson");
const lastNameAnotherPerson = document.getElementById("lastNameAnotherPerson");
const inStore = document.getElementById("inStore");

var cartString, cart, total;


/* -------------------------------------------------------------------------------------- */

window.onload = function () {

  cartString = localStorage.getItem('cartItems'); // funciona
  localStorage.removeItem('cartItems');
  cart = JSON.parse(cartString);
  console.log("🌸 ~ file: script.js ~ line 37 ~ cart", cart);

  total = localStorage.getItem('total'); // funciona
  localStorage.removeItem('total');
  console.log("🌸 ~ file: script.js ~ line 44 ~ localStorage", localStorage)

  cart.forEach(item => {
    //traer un item 
    const consultaBD = () => {
      const promise = new Promise((resolve, reject) => {

        const http = new XMLHttpRequest();
        http.open("GET", "http://localhost:8080/api/producto/" + item.itemId);
        http.send();
        http.onload = function () {
          const response = JSON.parse(http.response);
          if (http.status >= 400) {
            reject(response);
          } else {
            resolve(response);
          }
        }
      });
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
      return promise;

    };
    consultaBD().then((data) => {

      // si la consulta a BD fue exitosa, crear elemento 

      var product = data;

      var itemListUl = document.querySelector('.itemList');

      itemListUl.appendChild(itemCarrito(product, item.itemQuantity));

    }).catch((error) => alert("error!!!! no se pudo "));
  }
  )
  
  let juntar = "$"+total;
  let precioTotal = document.getElementById("totalCarritoSidebar");
  precioTotal.textContent = juntar;

}


function itemCarrito(producto, cantidad) {

  const card = document.createElement("li");
  card.className = "list-group-item carritoItem";

  //stock = obtenerStockProducto(productId);

  const contenido = `
    <div class="product-item">
      <div class="d-flex justify-content-between ">

          <div class="row">

              <div class="col-auto d-md-none d-lg-block product-col d-flex align-items-center">
                  <div style="max-width:50px;">
                      <img class="img-fluid rounded"
                          src="file://C:\Users\amine\Desktop\web\aurora\images\image_1.jpg"
                          alt="${producto.nombreProducto}" style="max-height: 100%; max-width: 100%;">
                  </div>
              </div>

              <div class="col mr-3">
                  <h6 class="my-0">${producto.nombreProducto}</h6>
                  <small class="text-muted">${producto.descripcionProducto} x${cantidad}</small><br>
                  <small id="productPrice" class="text-muted ">$${producto.precioProducto}</small>
              </div>
          </div>
          <span class="text-muted itemPrice">$${producto.precioProducto * cantidad}</span>
      </div>

    </div>
  `;

  card.innerHTML = contenido;


  return card;

}


// consultar a la base de datos los elementos de la lista


//

anotherPersonCheck.addEventListener('change', function hideAnotherPerson() {

  var firstNameAnotherPerson = document.getElementById("firstNameAnotherPerson");
  var lastNameAnotherPerson = document.getElementById("lastNameAnotherPerson");

  if (anotherPersonCheck.checked) {
    anotherPersonDiv.style.display = 'inline';
    firstNameAnotherPerson.setAttribute('required', '');
    lastNameAnotherPerson.setAttribute('required', '');
  } else {
    anotherPersonDiv.style.display = 'none';
    firstNameAnotherPerson.removeAttribute('required');
    lastNameAnotherPerson.removeAttribute('required');

    firstNameAnotherPerson.value = "";
    lastNameAnotherPerson.value = "";

  }
});


receiptInfoForm.addEventListener('submit',

  (function (event) {
    'use strict'

    receiptInfoForm.addEventListener('submit', function (event) {
      if (!receiptInfoForm.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

    }, false)

    receiptInfoForm.classList.add('was-validated');
    receiptInfoForm.classList.remove('active-form');
    receiptInfoDiv.style.display = 'none';
    deliveryInfoDiv.style.display = 'inline';
    deliveryInfoForm.classList.add('active-form');



  }
  )

);


/* paymentInfoForm.addEventListener('submit',

  (function () {
    'use strict'

    paymentInfoForm.addEventListener('submit', function (event) {
      if (!paymentInfoForm.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

    }, false)

    paymentInfoForm.classList.add('was-validated');

    paymentInfoForm.classList.remove('active-form');

    paymentInfoDiv.style.display = 'none';

    deliveryInfoDiv.style.display = 'inline';

    deliveryInfoForm.classList.add('active-form');

  }
  )

); */




goBackToDelivery.addEventListener('click',

  (function (event) {

    'use strict'
    event.preventDefault()
    receiptInfoForm.classList.add('active-form');
    receiptInfoForm.classList.remove('was-validated');
    receiptInfoDiv.style.display = 'inline';
    deliveryInfoDiv.style.display = 'none';
    deliveryInfoForm.classList.remove('active-form');

  }
  )

)


deliveryInfoForm.addEventListener('submit',

  (function (event) {
    'use strict'

    if (!receiptInfoForm.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    if (inStore.checked || homeDelivery.checked) {
      deliveryInfoForm.classList.add('was-validated');
      deliveryInfoForm.classList.remove('active-form');
      deliveryInfoDiv.style.display = 'none';
      checkoutDiv.style.display = 'inline';
      checkoutDiv.classList.add('active-form');
    }

    let formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      number: number.value,
      address: address.value,
      email: email.value,
      dni: dni.value,
      anotherPersonCheck: anotherPersonCheck.value,
      firstNameAnotherPerson: firstNameAnotherPerson.value,
      lastNameAnotherPerson: lastNameAnotherPerson.value
    }

    var http = new XMLHttpRequest();
    http.open("POST", "http://localhost:8080/api/sendEmail/");
    http.setRequestHeader('content-type', 'application/json');

    http.onload = function () {
      if (http.responseText == 'success') {
        alert('Email sent');
        firstName.value = '';
        lastName.value = '';
        number.value = '';
        address.value = '';
        email.value = '';
        dni.value = '';
        anotherPersonCheck.value = '';
        firstNameAnotherPerson.value = '';
        lastNameAnotherPerson.value = '';
      } else {
        alert('Something went wrong❗❗❗❗❗❗❗')
      }
    };

    http.send(JSON.stringify(formData));

  }
  )

);

submitInfoButton.addEventListener('click',
  (function (e) {

    /* 
        var emailInfo = function listaProductos() {
          var promise = new Promise(function (resolve, reject) {
            var http = new XMLHttpRequest();
            http.open("POST", "http://localhost:8080/api/mailer");
            http.send();
            console.log("🌸 ~ file: script.js ~ line 173 ~ promise ~ http", http);
    
            http.onload = function () {
    
              console.log("🌸 ~ file: script.js ~ line 178 ~ promise ~ http.response", http.response)
    
              var response = JSON.parse(http.response);
    
              if (http.status >= 400) {
                reject(response);
              } else {
                resolve(response);
              }
            };
          });
          return promise;
        };
    
        emailInfo().then((data) => {
    
          console.log("🌸 ~ file: script.js ~ line 192 ~ email ~ data", data);
    
        }).catch((error) => alert("error❗❗❗❗❓❓😳"));
     */
    /* 
        const listaProductos = () => {
          const promise = new Promise((resolve, reject) => {
    
            const http = new XMLHttpRequest();
    
            http.open("post", "http://localhost:8080/api/cliente");
    
            console.log(http.response);
    
            http.send();
    
            console.log(http.response);
    
            http.onload = function () {
              const response = JSON.parse(http.response);
              if (http.status >= 400) {
                reject(response);
              } else {
                resolve(response);
              }
            }
          });
          return promise;
        };
     */
    /*     listaProductos().then((data) => {
          console.log(data);
    
    
    
    
          data.forEach(producto => {
    
            const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
            table.appendChild(nuevaLinea);
    
          });
        }).catch((error) => alert("error!!!!!!!!!!!!")); */

  }

  )

)


/* receiptInfoForm.addEventListener('submit',

  (function (event) {
    'use strict'

    var form = document.querySelectorAll('.needs-validation[style="display: inline;"]');

    var activeForm = form.item(0);

    activeForm.addEventListener('submit', function (event) {
      if (!activeForm.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

    }, false)

    activeForm.classList.add('was-validated');

    activeForm.classList.remove('active-form');

    receiptInfoDiv.style.display = 'none';

    paymentInfoDiv.style.display = 'inline';


  }
  )

); */



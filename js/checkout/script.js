


const anotherPersonCheck = document.getElementById("anotherPersonCheck");

const anotherPersonDiv = document.getElementById("anotherPersonDiv");

const continueToPaymentButton = document.getElementById("continueToPaymentButton");

const receiptInfoDiv = document.getElementById("receiptInfoDiv");

/* const paymentInfoDiv = document.getElementById("paymentInfoDiv"); */

const deliveryInfoDiv = document.getElementById("deliveryInfoDiv");

const receiptInfoForm = document.getElementById("receiptInfoForm");

/* const paymentInfoForm = document.getElementById("paymentInfoForm"); */

const goBackToDelivery = document.getElementById("goBackToDelivery");

const checkoutDiv = document.getElementById("checkoutDiv");

const inStore = document.getElementById("inStore");

const homeDelivery = document.getElementById("homeDelivery");

const submitInfoButton = document.getElementById("submitInfo");

/* -------------------------------------------------------------------------------------- */

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

    } else {



    }


  }
  )

);

submitInfoButton.addEventListener('click',
  (function (e) {
    var formData = new Map();
    formData.set("firstName", document.getElementById("firstName").value);
    formData.set("lastName", document.getElementById("lastName").value);
    formData.set("number", document.getElementById("number").value);
    formData.set("address", document.getElementById("address").value);
    formData.set("email", document.getElementById("email").value);
    formData.set("dni", document.getElementById("dni").value);
    formData.set("anotherPersonCheck", document.getElementById("anotherPersonCheck").value);
    formData.set("firstNameAnotherPerson", document.getElementById("firstNameAnotherPerson").value);
    formData.set("lastNameAnotherPerson", document.getElementById("lastNameAnotherPerson").value);
    if (document.getElementById("inStore").checked)
      formData.set("delivery", 0);  /* 0 para retiro en tienda */
    else
      formData.set("delivery", 1);  /* 1 para entrega a domicilio */

    console.log(formData);


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



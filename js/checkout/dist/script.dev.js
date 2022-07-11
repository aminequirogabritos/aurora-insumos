"use strict";

var anotherPersonCheck = document.getElementById("anotherPersonCheck");
var anotherPersonDiv = document.getElementById("anotherPersonDiv");
var continueToPaymentButton = document.getElementById("continueToPaymentButton");
var receiptInfoDiv = document.getElementById("receiptInfoDiv");
/* const paymentInfoDiv = document.getElementById("paymentInfoDiv"); */

var deliveryInfoDiv = document.getElementById("deliveryInfoDiv");
var receiptInfoForm = document.getElementById("receiptInfoForm");
/* const paymentInfoForm = document.getElementById("paymentInfoForm"); */

var goBackToDelivery = document.getElementById("goBackToDelivery");
var checkoutDiv = document.getElementById("checkoutDiv");
var inStore = document.getElementById("inStore");
var homeDelivery = document.getElementById("homeDelivery");
var submitInfoButton = document.getElementById("submitInfo");
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
receiptInfoForm.addEventListener('submit', function (event) {
  'use strict';

  receiptInfoForm.addEventListener('submit', function (event) {
    if (!receiptInfoForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, false);
  receiptInfoForm.classList.add('was-validated');
  receiptInfoForm.classList.remove('active-form');
  receiptInfoDiv.style.display = 'none';
  deliveryInfoDiv.style.display = 'inline';
  deliveryInfoForm.classList.add('active-form');
});
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

goBackToDelivery.addEventListener('click', function (event) {
  'use strict';

  event.preventDefault();
  receiptInfoForm.classList.add('active-form');
  receiptInfoForm.classList.remove('was-validated');
  receiptInfoDiv.style.display = 'inline';
  deliveryInfoDiv.style.display = 'none';
  deliveryInfoForm.classList.remove('active-form');
});
deliveryInfoForm.addEventListener('submit', function (event) {
  'use strict';

  if (!receiptInfoForm.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (inStore.checked || homeDelivery.checked) {
    deliveryInfoForm.classList.add('was-validated');
    deliveryInfoForm.classList.remove('active-form');
    deliveryInfoDiv.style.display = 'none';
    checkoutDiv.style.display = 'inline';
    checkoutDiv.classList.add('active-form');
  } else {}
});
submitInfoButton.addEventListener('click', function (e) {
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
  if (document.getElementById("inStore").checked) formData.set("delivery", 0);
  /* 0 para retiro en tienda */
  else formData.set("delivery", 1);
  /* 1 para entrega a domicilio */

  console.log(formData);

  var listaProductos = function listaProductos() {
    var promise = new Promise(function (resolve, reject) {
      var http = new XMLHttpRequest();
      http.open("post", "http://localhost:8080/api/cliente");
      console.log(http.response);
      http.send();
      console.log(http.response);

      http.onload = function () {
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
  /*     listaProductos().then((data) => {
        console.log(data);
  
  
  
  
        data.forEach(producto => {
  
          const nuevaLinea = crearNuevaLinea(producto.idProducto, producto.nombreProducto, producto.descripcionProducto, producto.precioProducto);
          table.appendChild(nuevaLinea);
  
        });
      }).catch((error) => alert("error!!!!!!!!!!!!")); */

});
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
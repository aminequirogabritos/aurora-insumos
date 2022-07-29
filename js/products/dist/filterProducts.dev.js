"use strict";

$(document).ready(function () {
  /* clase active al primer enlace (todo) */
  $('.categoryList .categoryItem[category="all"]').addClass('ct_item-active');
  /* filter product */

  $('.categoryItem').click(function () {
    var category = $(this).attr('category'); //le doy el valor de category(html) a esta variable cada vez que hace click

    /* cambiando clase active a enlace seleccionado */

    $('.categoryItem').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');
    /* ocultar product */

    $(".productItem").css('transform', 'scale(0)');

    function hideProduct() {
      $(".productItem").hide();
    }

    setTimeout(hideProduct, 400);
    /* mostrar product deseado */

    function showProduct() {
      $('.productItem[category="' + category + '"]').show();
      $('.productItem[category="' + category + '"]').css('transform', 'scale(1)');
    }

    setTimeout(showProduct, 400);
  });
  /* mostrar todos */

  $('.categoryItem[category="all"]').click(function () {
    function showAll() {
      $('.productItem').show();
      $('.productItem').css('transform', 'scale(1)');
    }

    setTimeout(showAll, 400);
  });
});
"use strict";

$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  $('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').removeClass('active'); // hide overlay

    $('.overlay').removeClass('active');
  });
  $('#sidebarCollapse').on('click', function () {
    // open sidebar
    $('#sidebar').addClass('active'); // fade in the overlay

    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

function resizeScreen() {
  var w = document.documentElement.clientWidth;

  if (w <= 600) {
    document.getElementById("mySidepanel").style.width = w + "px";
  }
}

window.addEventListener('resize', resizeScreen);

function toggleSidebar() {
  var d = document.getElementById("mySidepanel");

  if (d.style.right == "0px") {
    d.style.right = "-600px";
  } else {
    d.style.right = "0px";
  }
}
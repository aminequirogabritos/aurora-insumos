
// controla movimiento panel carrito

var sidepanel;

if (document.readyState !== 'loading') {
    sidepanel = document.getElementById("mySidepanel");
} else {
    document.addEventListener('DOMContentLoaded', function () {
        sidepanel = document.getElementById("mySidepanel");
    });
}

function resizeScreen() {
    let w = document.documentElement.clientWidth;
    if (w <= 600) {
        document.getElementById("mySidepanel").style.width = w + "px";
    }
}

window.addEventListener('resize', resizeScreen);

function toggleSidebar() {
    if (sidepanel.style.right == "0px") {
        sidepanel.style.right = "-600px";
    }
    else {
        sidepanel.style.right = "0px";
    }
}

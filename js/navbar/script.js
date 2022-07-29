

/* $(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
 */

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

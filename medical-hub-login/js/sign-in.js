/*global $, document*/

$(document).ready(function () {

    /* Material Design Input Handling */
    function leaveInput(el) {
        if (el.value.length > 0) {
            if (!el.classList.contains('active')) {
                el.classList.add('active');
            }
        } else {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        }
    }

    var inputs = $(".m-input");
    for (var i = 0; i < inputs.length; i++) {
        var el = inputs[i];
        el.addEventListener("blur", function () {
            leaveInput(this);
        });
    }

    /* Login and Sign up Toggling */
    $('.form-toggle').on('click', function (el) {
        $(el.currentTarget).addClass('active').siblings("a").removeClass("active");
        if (el.currentTarget.innerHTML == 'Login') {
            $('.signup-form').fadeOut(100);
            $('.login-form').fadeIn(300);
        } else {
            $('.login-form').fadeOut(100);
            $('.signup-form').fadeIn(300);
        }
    });


});

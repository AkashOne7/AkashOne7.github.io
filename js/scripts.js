$(document).ready(function () {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked

    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    //ToolTip
    $('[data-toggle="tooltip"]').tooltip({
        animation: true,
        delay: 400,
        trigger: "hover",
        placement: "bottom",
    });


    //card hover shadow effect  
    $(".card ").hover(function () {
        $(this).animate({
            marginTop: "-=1%"
        }, 200);
    },
        //trigger when mouse out 
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 200);
        }
    );



});

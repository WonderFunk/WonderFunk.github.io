//Enables WOW.js
new WOW().init();


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    
    var videoHeight = jQuery('video').height();
    
    if ($(".navbar").offset().top > parseInt(videoHeight - 100)) {
        $(".navbar-fixed-top").addClass("nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("nav-collapse");
    }
});
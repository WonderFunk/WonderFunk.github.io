//Enables WOW.js
new WOW().init();


// jQuery for page scrolling feature
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//Video resizing code
 jQuery(document).ready(function(){
            $('video#intro-video').on("loadedmetadata", scaleVideo);
                function scaleVideo(){
                    
                    //Stores window dimensions as variables
                    var windowWidth = $(window).width();
                    var windowHeight = $(window).height();
            
                    //Stores video dimensions as variables
                    var videoNativeWidth = $('video#intro-video')[0].videoWidth;
                    var videoNativeHeight = $('video#intro-video')[0].videoHeight;
                    
                    //stores scale factors                   
                    var heightScale = windowHeight / videoNativeHeight;
                    var widthScale = windowWidth / videoNativeWidth;

                    //Stores heighest scale factor                  
                    if(widthScale > heightScale) {
                        var scale = widthScale;
                    }
                    else {
                        var scale = heightScale;
                    }
                    
                    //Stores scaled video dimensions                
                    var videoScaledWidth = videoNativeWidth * scale;
                    var videoScaledHeight = videoNativeHeight * scale;
                    
                    //Apply scaled dimensions
                    $('video#intro-video').height(videoScaledHeight);
                    $('video#intro-video').width(videoScaledWidth);
                }
        })
 
 
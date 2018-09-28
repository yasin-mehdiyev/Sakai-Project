$(document).ready(function(){
    if ($('.owl-menu').length) {
        $('.owl-menu').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            smartSpeed: 700,
            autoplay: 4000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:3
                },
                1200:{
                    items:3
                },
                1600:{
                    items:5
                }
            }
        });    		
    }
})
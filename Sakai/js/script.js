$(document).ready(function () {
  
//Preloader
  function handlePreloader() {
    if ($('#preloader').length) {
      $('#preloader').delay(200).fadeOut(500);
    }
  }
  handlePreloader();

//Navbar
  navbg();
  $(window).resize(function () {
    navbg();
})
  $(".search-icon").click(function () {
    $(".form-container").toggle();
  })
  $(window).click(function(e){
    if(e.target==$(".tp-bgimg")){
      $(".form-container").fadeOut();
  }
  });
  navbg();
  $(window).resize(function () {
    navbg();
  })
  function navbg(e) {
    if ($(window).width() > 1140) {
      $("nav").css("margin-top", "30px").removeClass("bg-dark");
      $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
          $("nav").css("margin-top", "0").addClass("bg-dark");
        }
        else {
          $("nav").css("margin-top", "30px").removeClass("bg-dark");
        }
      })
    }
    else {
      $("nav").css("margin-top", "0").addClass("bg-dark");
    }
  }


  $(".mydropdown-toggle").mouseover(function () {
    $("nav").css("overflo")
});



  // wow//
  if ($('.wow').length) {
    var wow = new WOW(
      {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: false,       // trigger animations on mobile devices (default is true)
        live: true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
  }


  //Accordion Menu
  $(".acc-btn").click(function () {
    var panel = $(this).parents(".accordion-item");
    if ($(this).hasClass("active") !== true) {
      $('.acc-btn').removeClass('active');
    }
    if ($(this).next(".acc-content").is(":visible")) {
      return false;
    }
    else {
      $(this).addClass("active");
      $(panel).removeClass("active-item");
      $('.acc-content').slideUp(300);
      $(panel).addClass("active-item");
      $(this).next(".acc-content").slideDown(300);
    }
  })
$(document).ready(function(){
    $('.slides').bxSlider({
        auto: true,
        mode:'fade',
        pagerCustom:'.images',
      nextText:[ '<span class="fa fa-caret-right"></span>' ],
	    prevText:[ '<span class="fa fa-caret-left"></span>' ]
    });
});
});

  // ScrollTop
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
  
  function topFunction() {
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0; 
  }













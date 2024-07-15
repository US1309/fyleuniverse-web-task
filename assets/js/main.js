$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: false,
            dots: true,
            pauseOnHover: true,
            responsive:{
                600:{
                  //  margin: 20,
                  dotsEach: 5,
                    nav: false,
                  items: 2
                },
                1000:{
                  //  margin: 20,
                  dotsEach: 3,
                    stagePadding: 0,
                    nav: false,
                  items: 4
                }
            }
        });            
    }
})

$(document).ready(function () {
  $("#contactBtn").click(function () {
    $("#popoverForm").fadeToggle();
  });

  $(".close").click(function () {
    $("#popoverForm").fadeOut();
  });

  $("#contactForm").submit(function (event) {
    event.preventDefault();
    alert("Form submitted!");
    $("#popoverForm").fadeOut();
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1
  });

  $(".card-item").click(function () {
    $(".card-item").removeClass("active");
    $(this).addClass("active");
    var imageUrl = $(this).find("img").attr("src");
    $("#main-image").attr("src", imageUrl);
  });
});

// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var slider = tns({
    "items": 2,
    "controls": false,
    "center": true,
    "controlsContainer": false,
    "controlsPosition": "bottom",
    "autoplay": true,
    "autoplayButtonOutput": false,
    "fixedWidth": 200,
    "edgePadding": 15,
    "gutter": 85,
    "responsive": {
      "500": {
        "center": false,
        "items": 2,
        "fixedWidth": 220,
        "gutter": 15,
        "edgePadding": 0,
        "autoplayTimeout": 3000
      },
      "900": {
        "items": 4,
        "gutter": 40,
        "edgePadding": 100,
        "fixedWidth": 250,
        "center": true,
        "autoplayTimeout": 3000
      }
    },
    "container": "#responsive",
    "swipeAngle": false,
    "speed": 1000,
    "autoplayTimeout": 4000
  });

  function CarouselContainerResize() {
    if($(window).width() > 500) {
        $('#carouselContainer').addClass("w-75");
    }
    else {$('#carouselContainer').removeClass("w-75");}
  }

  $(document).ready( function () {

      // Check if Carousel needs to be resized
      $(window).resize(CarouselContainerResize);
      CarouselContainerResize();

  });
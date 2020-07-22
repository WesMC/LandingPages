// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var slider = tns({
    "items": 2.2,
    "controls": false,
    "center": false,
    "controlsContainer": false,
    "controlsPosition": "bottom",
    "autoplay": true,
    "autoplayButtonOutput": false,
    "fixedWidth": 150,
    "edgePadding": 25,
    "gutter": 15,
    "responsive": {
      "350": {
        "items": 3
      },
      "500": {
        "items": 2,
        "fixedWidth": 225,
      },
      "900": {
        "items": 4,
        "gutter": 40,
        "edgePadding": 100,
        "fixedWidth": 250,
        "center": true
      }
    },
    "container": "#responsive",
    "swipeAngle": false,
    "speed": 1000,
    "autoplayTimeout": 3000
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
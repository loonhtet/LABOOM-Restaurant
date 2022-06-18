function searchwork() {
  var button = document.querySelector("#ok");
  var search = document.querySelector("#search");

  button.addEventListener("click", function () {
    if (!search.classList.contains("active")) {
      search.classList.add("active");
      search.style.height = "45px";
      search.style.padding = "10px 20px";
    } else {
      search.classList.remove("active");
      search.style.height = "0";
      search.style.padding = "0px 20px";
    }
  });
}

searchwork();

$('.bottom-cart').on('click',function(){
  $('.hover-cart').toggle();
})



$(document).ready(function () {
  $(".owl-fbowlCS").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    // autoplay: true,
    smartSpeed:2000,
    navText: [
      "<i class='fa-solid fa-arrow-left fbbuttonCS'></i>",
      "<i class='fa-solid fa-arrow-right fbbuttonCS'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-product").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    slideBy: 3,
    navText: [
      '<i class="fa-solid fa-arrow-left carousel-prevs"></i>',
      '<i class="fa-solid fa-arrow-right carousel-nexts"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-client").owlCarousel({
    loop: true,
    nav: true,
    center: true,
    dot: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 2,
      },
    },
  });

  $('.owl-chief').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 2000,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
  })

  $(".hello-owl").owlCarousel({
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    loop:true,
    margin:30,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    stagePadding:20,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
  });

});

$(window).on("load", function () {
  var $grid = $(".menu-grids").isotope({
    itemSelector: ".menu-items",
    layoutMode: "fitRows",
  });

  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $(".menu-grids").isotope({ filter: filterValue });

    for (let i = 0; i < $(".filter-button-group button").length; i++) {
      if ($(".filter-button-group button")[i].classList.contains("active")) {
        $(".filter-button-group button")[i].classList.remove("active");
      }
    }
    $(this).addClass("active");
  });
});

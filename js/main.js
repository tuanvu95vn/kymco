hamburger = $(".hamburger");
navSub = $(".nav-sub");

//.......................HEADER...........................
$("header .search__icon").click(function (event) {
  event.stopPropagation();
  $("header .search").toggleClass("active");
  $("header .container-fluid .nav-main ul ").toggleClass("hide");
});
$("body").click(function () {
  $("header .search").removeClass("active");
});

//-Change Header color

$(window).scroll(function () {
  hHeader = $("header").outerHeight(true);
  hSlider = $(".slider").outerHeight();
  hBanner = $(".bannertop .img").outerHeight();
  hBannerProduct = $(".head .banner").outerHeight();
  hTopTech = $(".techpage .top").outerHeight();

  var scrollTop = $(window).scrollTop();
  if (scrollTop >= hSlider - hHeader) {
    $("header").css("background-color", "#000");
  } else if (scrollTop >= hBannerProduct - hHeader) {
    $("header").css("background-color", "#000");
  } else if (scrollTop >= hBanner - hHeader) {
    $("header").css("background-color", "#000");
  } else if (scrollTop >= hTopTech - hHeader) {
    $(".header-tech").css(
      "background-image",
      "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5),rgba(0,0,0,0))"
    );
    $(".header-tech source").attr("srcset", "img/logo.png");
  } else {
    $("header").css("background-color", "initial");
    $(".header-tech").css("background-image", "initial");
    $(".header-tech source").attr("srcset", "img/logo-black.png");
  }
});

//- Click Hamburger
$("input").click(function (event) {
  event.stopPropagation();
});

hamburger.click(function (event) {
  event.stopPropagation();
  $(this).toggleClass("clicked");
  navSub.toggleClass("active");
});
$(window).scroll(function () {
  hamburger.removeClass("clicked");
  navSub.removeClass("active");
});
$("body").click(function () {
  hamburger.removeClass("clicked");
  navSub.removeClass("active");
});

btn = $(".btn");
btn.click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
});

//----Change hover nav-----------
$("header .nav-main li").hover(
  function () {
    $("header .nav-main a").addClass("inactive");
  },
  function () {
    $("header .nav-main a").removeClass("inactive");
  }
);

//-----Hide Header-----
window.onscroll = function (e) {
  // print "false" if direction is down and "true" if up
  let getScroll = document.querySelector("html").scrollTop;
  console.log(getScroll);
  // console.log(getScroll,hSlider - offsetHeightHeader)
  if (this.oldScroll > this.scrollY && getScroll >= hSlider - hHeader) {
    $("header").removeClass("hide");
    // console.log('remove hide')
  }
  if (this.oldScroll < this.scrollY && getScroll >= hSlider - hHeader) {
    $("header").addClass("hide");
    // console.log('add hide')
  }
  this.oldScroll = this.scrollY;
};

// $('.backtotop_outer').click(function () {
//     $('header').removeClass('hide')
// })

//-------------------------MAIN-----------------------------

// ------Change page button -------------
let current = 0;
$(".btn-page .next-btn").click(function () {
  current = $(".btn-page .active").attr("btn");

  $(".btn-page .btn").removeClass("active");
  if (current != 2) {
    current++;
    switch (current) {
      case 0: {
        $(".btn-page .page-1").addClass("active");
        break;
      }
      case 1: {
        $(".btn-page .page-2").addClass("active");
        break;
      }
      case 2: {
        $(".btn-page .page-3").addClass("active");
        break;
      }
    }
  } else {
    $(".btn-page .page-3").addClass("active");
  }
});

$(".btn-page .prev-btn").click(function () {
  current = $(".btn-page .active").attr("btn");

  $(".btn-page .btn").removeClass("active");
  if (current != 0) {
    current--;
    switch (current) {
      case 0: {
        $(".btn-page .page-1").addClass("active");
        break;
      }
      case 1: {
        $(".btn-page .page-2").addClass("active");
        break;
      }
      case 2: {
        $(".btn-page .page-3").addClass("active");
        break;
      }
    }
  } else {
    $(".btn-page .page-1").addClass("active");
  }
});

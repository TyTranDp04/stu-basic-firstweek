// slick
$(".alumni-saying__card").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='YOUR LEFT ARROW IMAGE URL'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='YOUR RIGHT ARROW IMAGE URL'>",
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //end slick
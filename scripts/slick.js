// $(document).ready(function () {
//   $('.b-ourCreativeTeam__slider').slick({
//     // adaptiveHeight: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 1000,
//     infinite: true,
//     centerMode: true,
//     centerPadding: "30px",
//     //     autoplay: true,
//     //     autoplaySpeed: 2000,
//   });
// });



// $(".b-ourCreativeTeam__slider").slick({
//     dots: false,
//     infinite: true,
//     centerMode: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slickCurrentSlide: 2,
// });
$(document).ready(function () {
  $('.center').slick({
    infinite: true,
    speed: 900,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });
});
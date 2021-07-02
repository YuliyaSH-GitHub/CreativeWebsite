$(document).ready(function () {
  $(".center").slick({
    infinite: true,
    speed: 900,
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    responsive:[
			{
				breakpoint: 768,
				settings: {
          autoplay: false,
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
          autoplay: false,
					slidesToShow:1
				}
			}
		]
  });
});
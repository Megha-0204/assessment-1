// js for header slider
var swiper1 = new Swiper(".mySwiper1", {
  effect: 'fade',

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
el: '.swiper-scrollbar',
},
autoplay: 
{
delay: 2000,
},
});

// js for testimonial slider
var slider3 = new Swiper(".testimonials-slider", {
  effect: 'fade',
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },     

});

// js for masonary
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
  gutter: 15,
});

//js for scrollbar
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".fixed-top").css("background" ,"#cbcae4");
	  }

	  else{
		  $(".fixed-top").css("background" , "transparent");  	
	  }
  })
})

// js for slick slider

$(function() {
  $('.carousel').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    // slidesToScroll: 7,
    swipe: true,
    // swipeToSlide: true,
  });
  
// $('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
//   console.log(currentSlide);
// });

});
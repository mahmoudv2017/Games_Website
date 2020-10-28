var swiper = new Swiper('.lander', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlide : 3,
    autoplay: {
        delay: 4000,
      },
      mousewheel: {
        invert: true,
      },
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
});


var similar_swiper = new Swiper(' .similars', {
    slidesPerView: 4,
    spaceBetween: 30,
    initialSlide : 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay: {
        delay: 4000,
      },
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  function show_header(index){
    document.querySelectorAll('.similar_header')[index-1].style.opacity = "1"
  }
  function hide_header(index){
    document.querySelectorAll('.similar_header')[index-1].style.opacity = "0"
  }
function getmethere(slug){
  window.location.href = "/game="+slug
}

// $('.btn').click(function() {

//   document.querySelector('.side_menuu').style.display = 'none'
 
// });



function clicked(key){
    window.location.href = "/game="+key
}


$('.header').owlCarousel({
    items:1,
    nav:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoHeight:true
});

$('.game_pc').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




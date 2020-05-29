$(document).ready(function(){
  
  $('.slider').slick({
    arrows:true,
    dots:false,
    adaptiveHeight:true,
    slidesToShow:3,
    slidesToScroll:3,
    speed:1000,
    easing:'ease',
    infinite:false,
    initialSlide:0,
    autoplay:true,
    
    pauseOnFocus:true,
    pauseOnHover:true,
    touchThreshold:10,
    waitForAnimate:false,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          arrows:false,
          dots:true,
        }
      }
    ],
    mobileFirst:false,
    appendArrows:$('.qwert')
  }
  );
}); 



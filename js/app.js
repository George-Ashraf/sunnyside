wow = new WOW(
    {
    boxClass:'animate__animated'
    
  }).init();
// wow js
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items:1,
      loop:false,
      center:true,
      margin:10,
      URLhashListener:true,
      autoplayHoverPause:true,
      startPosition: 'URLHash'
    });
    //owl
    // jQuery("#responsive_headline").fitText(0.2,{ minFontSize:'20px',maxFontSize:'100px' });
    // //fit text
    $("body").niceScroll({
        cursorcolor: "white",
        cursorwidth:5
    });
    //nice scroll
    
  });
  var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 1000
  });
 
  //smooth scroll
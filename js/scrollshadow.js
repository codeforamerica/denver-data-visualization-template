app.hookupScrollShadow = function() {

  var  mn = $(".main-nav");
  var  ns = "nav-shadow";

  $(window).scroll(function() {

    if( $(this).scrollTop() > 80 ) {
      mn.addClass(ns);
    } else {
      mn.removeClass(ns);
    }
  });

} 

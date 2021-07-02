    //                         HomePage Slider / Mobile only
    //            Height equal to dynamic current width (CSS fluid layout) 
    // ============================================================================= //

jQuery(function($) {
    if (($(window).width() < 480 || $(window).height() < 480) && (window.matchMedia("(orientation: portrait)").matches) && ((window.location.href.indexOf("file:///Users/fredericlabourel/Work/GitHub/thrive/FredLabdev.github.io/index.html") > -1)  || (window.location.href.indexOf("file:///Users/fredericlabourel/Work/GitHub/thrive/FredLabdev.github.io/shop.html") > -1) )) {
        // slider image height
        var cw = $('.image').width();
        $('.image').css({'height':cw+'px'});
        // slider controls vertical position
        var vp = cw - 50;
        $('.carousel-control-block').css({'top':vp+'px'});
    }
});

    //                                Contact Form
    //            
    // ============================================================================= //

function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}
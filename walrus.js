$(document).ready(function(){

  $(".clickable").click(function() {
    $("#section1-hidden").fadeToggle();
  });

  $(".clickable2").click(function() {
    $("#section2-hidden").fadeToggle();
  });

});

$(document).ready(function(){

  $(".clickable").click(function() {
    $("#section1-hidden").fadeToggle();
  });

  $(".clickable2").click(function() {
    $("#section2-hidden").fadeToggle();
  });

  $("#p1").click(function() {
    $("#p2").removeClass("highlight");
    $("#p1").addClass("highlight");
  });
  $("#p2").click(function() {
    $("#p1").removeClass("highlight");
    $("#p2").addClass("highlight");
  })
});

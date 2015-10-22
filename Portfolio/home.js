



  // window.addEventListener("resize", function resize() {
  //    $("nav").hide()
  // });





function onReady() {
  $("#hello").click(
    function(){
      $("#hello").innerHTML = "Goodbye!";
    }
  );

  $(window).scroll(function() {
    $('.container').animate(
    {
       opacity: .2,
    }
       , 2000 );
  });
}


//always at the bottom
$(document).ready(onReady);




  // window.addEventListener("resize", function resize() {
  //    $("nav").hide()
  // });


$(document.ready)




function onReady() {
  $("#hello").click(
    function(){
      $("#hello").innerHTML = "Goodbye!";
    }
  );

  $('.container').click(function() {
    $('.container').animate(
    {
       opacity: .8,
    }
       );
  });
}


//always at the bottom
$(document).ready(onReady);
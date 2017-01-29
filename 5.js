// This code runs when the page loads
$(function() {

  $("#do-something").on("click", function(event) {
    // Do something like making the page stay
    event.preventDefault()
    $("#unicorn").fadeIn(500);
  });

})

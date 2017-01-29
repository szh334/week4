// This code runs when the page loads
$(function() {

  $(".clickdone").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    var removedElement = elementThatWasClicked.parents().eq(1)
    console.log(elementThatWasClicked.parents().eq(1) + "has been removed")
    //elementThatWasClicked.remove()
    removedElement.remove()
    console.log("there are " + $("div").length + "divs remaining")
    //$.when($( "div" ).length = 0).then(console.log("all done"))
    if($( "div" ).length <= 0) {console.log("all done!");
                                $(".allDone").fadeIn()
                                }
  })
})

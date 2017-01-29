// This code runs when the page loads
$(function() {

  $(".clickdone").on("click", function(event) {
    var elementThatWasClicked = $(this)
    var removedElement = elementThatWasClicked.parents().eq(1) //store second level parent to delete the row
    console.log(elementThatWasClicked.parents().eq(1) + "has been removed")//log which row to remove
    removedElement.remove()//remove row
    console.log("there are " + $("div").length + "divs remaining")//check how many list divs are remaining
    if($( "div" ).length <= 0)//if all divs have been removed, then show the hidden stuff
      {console.log("all done!");
        $(".allDone").fadeIn()
      }
  })
})

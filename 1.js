// This code runs when the page loads
$(function() {

  // Write a function that yells (e.g. TACOS!!!!!)
  var yell = function(stuff) {
    // change this so it works
    // .toUpperCase() is a built-in function
  var stringUpper = stuff.toUpperCase();
    return stringUpper + "!!!!!"
  }

  var theMostAwesomeFood = "foodss"

  window.alert(yell(theMostAwesomeFood))
})

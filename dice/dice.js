// get a random integer between 1 and 6 - getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  $(".roll").on("click", function(event) {
  // Do something like making the page stay
  event.preventDefault() //stops link event
  var dice1 = $("#d1")
  var dice2 = $("#d2")
  dice1.attr("src","http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
  dice2.attr("src","http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
  //$("#d2").attr("src","http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
})
  // make magic happen
  // some jQuery functions you'll need:
  // - click
  // - attr
})

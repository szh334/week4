// DO NOT CHANGE THE CODE BETWEEN HERE AND LINE 30

// function to shuffle (randomize the order of) an array
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns something representing a deck of cards... try it in the console, you'll see
// e.g. window.getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END DO NOT CHANGE CODE

$(function() {
  $(".deal").on("click", function(event) {
  // Do something like making the page stay
  event.preventDefault() //stops link event
  var newDeck = window.getDeck()
  var randDeck = newDeck.shuffle()
  console.log(randDeck)
  var card1 = $("#c1")
  var card2 = $("#c2")
  var card3 = $("#c3")
  var card4 = $("#c4")
  var card5 = $("#c5")
  card1.attr("src","http://golearntocode.com/images/cards/" + randDeck[0] + ".png")
  card2.attr("src","http://golearntocode.com/images/cards/" + randDeck[1] + ".png")
  card3.attr("src","http://golearntocode.com/images/cards/" + randDeck[2] + ".png")
  card4.attr("src","http://golearntocode.com/images/cards/" + randDeck[3] + ".png")
  card5.attr("src","http://golearntocode.com/images/cards/" + randDeck[4] + ".png")
  //$("#d2").attr("src","http://golearntocode.com/images/dice/" + getRandomInt(1,6) + ".png")
  })
  // make magic happen
  // some jQuery functions you'll need:
  // - click
  // - attr
  // Your code goes here!
})

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

window.randDeck;
window.newDeck;
window.numCardsPlayed;
newDeck = window.getDeck();
randDeck = newDeck.shuffle();
numCardsPlayed = 0;

$(function() {
  $(".getNewDeck").on("click", function(event) {
    numCardsPlayed = 0
    $("#newDeckMessage").fadeOut()
    event.preventDefault() //stops link event
    newDeck = window.getDeck()
    randDeck = newDeck.shuffle()
    console.log(randDeck)
    $("#c1").attr("src","http://golearntocode.com/images/cards/ace_of_hearts.png")
    $("#c2").attr("src","http://golearntocode.com/images/cards/ace_of_hearts.png")
    $("#c3").attr("src","http://golearntocode.com/images/cards/ace_of_hearts.png")
    $("#c4").attr("src","http://golearntocode.com/images/cards/ace_of_hearts.png")
    $("#c5").attr("src","http://golearntocode.com/images/cards/ace_of_hearts.png")
    console.log(numCardsPlayed)

  })

  $(".deal").on("click", function(event) {
    event.preventDefault() //stops link event
    if(numCardsPlayed < 50) {
      $("#c1").attr("src","http://golearntocode.com/images/cards/" + randDeck[numCardsPlayed + 0] + ".png")
      $("#c2").attr("src","http://golearntocode.com/images/cards/" + randDeck[numCardsPlayed + 1] + ".png")
      $("#c3").attr("src","http://golearntocode.com/images/cards/" + randDeck[numCardsPlayed + 2] + ".png")
      $("#c4").attr("src","http://golearntocode.com/images/cards/" + randDeck[numCardsPlayed + 3] + ".png")
      $("#c5").attr("src","http://golearntocode.com/images/cards/" + randDeck[numCardsPlayed + 4] + ".png")
      numCardsPlayed = numCardsPlayed + 5
      console.log(numCardsPlayed)
    }
    else
    {$("#newDeckMessage").fadeIn()}
  })


})

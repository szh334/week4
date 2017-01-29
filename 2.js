// This code runs when the page loads
$(function() {

  // Add the speak() method to alert something incredible
  var dog = {
    name: "Rosie",
    breed: "Pug",
    color: "Fawn",
    speak: function() {return "my name is " + this.name}
  }

  window.alert(dog.speak())

})

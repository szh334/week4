// This code runs when the page loads
$(function() {

  // Create an object that represents your social profile
  // Create two methods on this object:
  // 1. Write a short message to the console which displays how many friends you have (this.friends.length)
  // 2. Create an alert that displays your current status (this.status)
  var brian = {
    name: "Brian",
    location: "Chicago, IL",
    status: "Teaching KIEI-924 at Kellogg",
    friends: ["Walt", "Hank", "Saul","next"],
    logNumberOfFriends: function() {return console.log(this.friends.length)
    },
    alertCurrentStatus: function() {return window.alert(this.status)}
    }



  // Use the two methods here
  brian.logNumberOfFriends()
  brian.alertCurrentStatus()

})

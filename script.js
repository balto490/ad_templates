

$(document).ready(function(){

window.onload = function() {

var headline = document.getElementById("sponsor_title").innerHTML;

console.log(headline.length);
console.log(headline.substring(0,30))


  if (headline.length > 30) {
      document.getElementById("sponsor_title").innerHTML = (headline.substring(0,30)+'...')
  }
  else {
      document.getElementById("sponsor_title").innerHTML = headline
  }


var textTwo = document.getElementById("text_two").innerHTML;

  if (textTwo.length > 91) {
      document.getElementById("text_two").innerHTML = (textTwo.substring(0,91)+'...')
  }
  else {
      document.getElementById("text_two").innerHTML = textTwo
  }

};

});

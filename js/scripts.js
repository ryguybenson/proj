function wordPlay() {
  var sentence = prompt("please enter: ");
  var words = sentence.split(' ');
  var newWords = words.filter(word => word.length > 2);
  // var newWords = words.map(function(word) {
  //   if (word.length >= 3) {
  //     return word;
  //   } else {
  //     return "";
  //   }
  //  	/* return (word.length <= 3); */
  //   });
  newWords.reverse();
  alert(newWords.join(" "));
}

$(document).ready(function() {
  wordPlay();
});

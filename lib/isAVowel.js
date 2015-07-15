'use strict';

var isAVowel = function(lttr){
  var regex = /[aeiou]/;
  return regex.test(lttr);
};

// ###########################
// DO NOT EDIT BELOW THIS LINE
// ###########################

$(function() {
  $( "#target" ).submit(function( event ) {
    event.preventDefault();
    var input = $("#in").val();
    var result = isAVowel(input);
    $('#result').text(result);
  });
});

var Calculator = require('./../js/scripts.js').calculatorModule;

$(document).ready(function() {
  $('form#pingpong').submit(function(event) {
    $('ul').empty();
    var userNum = parseInt($('input#userNum').val());
    var simpleCalculator = new Calculator("hot pink");
    var resultPing = simpleCalculator.pingPong(userNum);

    for (var i = 0; i < resultPing.length; i++ ) {
      $('.resultPing').append('<li>' + resultPing[i] + '</li>');
    }
  event.preventDefault();
  });
});

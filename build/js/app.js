(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(userNum) {

  var submitResult = [];

  for (var i = 1; i <= userNum; i++) {
    if ((i % 15) === 0) {
    submitResult.push('ping pong');
    } else if ((i % 5) === 0) {
    submitResult.push('pong');
    } else if ((i % 3) === 0) {
    submitResult.push('ping');
    } else {
    submitResult.push(i);
    }
  }
  return submitResult;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/scripts.js":1}]},{},[2]);

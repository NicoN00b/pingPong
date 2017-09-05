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

var Calculator = require('./../js/scripts.js').calculatorModule;

describe(Calculator, function(){
  it('will return ping is a number is divisible by 5', function(){
    var number = 160
    expect(Calculator.pingPong(number)).toEqual("ping")
  });
});

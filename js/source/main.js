(function() {
  'use strict';

  $('document').ready(initialize);

  function initialize(){
    $('#add').click(add);
    $('#subt').click(subt);
    $('#mult').click(mult);
    $('#divi').click(divi);
    $('#root').click(root);
    $('#expo').click(expo);
    $('#fact').click(fact);

  }

  function getNumber() {
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return[x,y];
  }

  function add() {
    var values = getNumber();
    var answer = values[0] + values[1];
    display(answer);
  }

  function subt() {
    var values = getNumber();
    var answer = values[0] - values[1];
    display(answer);
  }

  function mult() {
    var values = getNumber();
    var answer = values[0] * values[1];
    display(answer);
  }

  function divi() {
    var values = getNumber();
    var answer = values[0] / values[1];
    display(answer);
  }

  function root() {
    var values = getNumber();
    var answer = Math.pow(values[0], (1/values[1]));
    display(answer);
  }

  function expo() {
    var values = getNumber();
    var answer = Math.pow(values[0], values[1]);
    display(answer);
  }

  function fact(){
    var values = getNumber();
    var answer = values[0];
    for(var i = values[0]; i > 1; i--){
        answer = answer * (i - 1);
    }

    if ( answer === 0){
      answer = 1;
    }

    display(answer);
  }

  function display(answer){
    $('#answer').text(answer);
  }

})();

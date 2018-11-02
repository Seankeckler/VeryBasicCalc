function calculate() {
    var num1 = parseInt(document.getElementsByName('number1')[0].value, 10);
    var num2 = parseInt(document.getElementsByName('number2')[0].value, 10);
    var ops = document.getElementsByName('op');
    var elem = document.getElementById("math_res");
  
    var op = null,
      len = ops.length;
    while (len--) {
      if (ops[len].checked) {
        op = ops[len].value;
        break;
      } 
    }
  
    switch (op) {
      case 'add':
        elem.innerHTML = num1 + num2;

        break;
      case 'sub':
        elem.innerHTML = num1 - num2;
        break;
      case 'mul':
        elem.innerHTML = num1 * num2;
        break;
      case 'div':
        elem.innerHTML = num1 / num2;
        break;
    }
  }
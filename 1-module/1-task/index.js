function factorial(n) {
  // ваш код...
  let result = 1;
  if (n === 0) 
    return result;
  else if (n > 0 && (Number.isInteger(n))) {
    while (n > 0) {
    result *= n;
    n--; 
    } return result;
  }
  else return 'Please insert a intenger value or use the Gamma Function!';
  }
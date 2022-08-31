function camelize(str) {
  // ваш код...

  // var 1
  
  // let strWithCaps = '';
  //   for (let i = 0; i < str.length; i++) {
  //     if(str[i - 1] === '-') strWithCaps += str[i].toUpperCase();
  //     else strWithCaps += str[i];
  //   }   
  // return strWithCaps.split('-').join('');

  // var 2 ninja code

  return str.split('').reduce( (previousValue, currentValue) => ( previousValue.slice( -1 ) === '-' ? previousValue.slice(0, previousValue.length - 1) + currentValue.toUpperCase() : previousValue + currentValue), '')

}

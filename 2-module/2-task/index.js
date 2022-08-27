function isEmpty(obj) {
  // ваш код...
  //var1
  // let counter =0;

  // for (let key in obj) counter++;
  // return !Boolean( counter );

  // var2
  return Object.keys(obj).length ? false : true;
}

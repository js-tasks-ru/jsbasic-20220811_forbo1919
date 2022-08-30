function getMinMax(str) {
  // ваш код...

  let numberArr = str
  .split(' ')
  .filter( item => isFinite(item) ); 
  
  return {
    min: numberArr.reduce((a, b) => Math.min(a, b)),
    max: numberArr.reduce((a, b) => Math.max(a, b))
  }
  
}

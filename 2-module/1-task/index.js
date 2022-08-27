function sumSalary(salaries) {
  // ваш код...
  let result = 0;
  for (let key in salaries) {
   if ( Number.isFinite(salaries[key]) ) result += salaries[key];
  };
 return result;
}

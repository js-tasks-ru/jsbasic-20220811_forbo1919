function showSalary(users, age) {
  // ваш код...
  return users
  .filter( item =>  item.age <= age )
  .reduce( (sum, item) => 
    sum === '' ? `${item.name}, ${item.balance}` 
    : ( `${sum}\n${item.name}, ${item.balance}` ), '' );

}

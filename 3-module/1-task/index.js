function namify(users) {
  // ваш код...

  // var 1

// let rusName = [];
// users.forEach((item, index, array) => {rusName.push(users[index].name)});
// return rusName;

// var 2

// let rusName = [];
// users.forEach((item) => rusName.push(item.name));
// return rusName;

// var 3
return users.map( (item) => item.name );

}

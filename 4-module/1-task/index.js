function makeFriendsList(friends) {

  let ul = document.createElement('UL');
          
  for (let item of friends) {
    ul.insertAdjacentHTML('beforeEnd', `<li>${item.firstName} ${item.lastName}</li>`);
  }
  return ul;
}

function makeDiagonalRed(table) {
  // ваш код...

  // let cellsList = document.querySelector('tbody');

  let cellsList = document.querySelector('table');

  for (let i = 0; i < cellsList.rows.length; i++) {

    //cellsList.children[i].children[i].style.backgroundColor = 'red'
    cellsList.rows[i].cells[i].style.backgroundColor = 'red';
    //cellsList.rows[i].cells[i].setAttribute('backgroundColor', 'red');
   
  }
}
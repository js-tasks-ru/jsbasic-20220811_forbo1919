function highlight(table) {
  // ваш код...

  let cellsList = table.querySelector('tbody');

  //console.log( cellsList )

  for (let rowLine of cellsList.rows ) {
    
    console.log( rowLine.cells[3].dataset.available )

    if (rowLine.cells[3].hasAttribute('data-available') !== true ) {rowLine.hidden = true}
    else if (rowLine.cells[3].dataset.available == 'true') {rowLine.classList.add('available')}
    else if (rowLine.cells[3].dataset.available == 'false' ) {rowLine.classList.add('unavailable')}

    console.log(rowLine.cells[2].innerHTML)

    if ( rowLine.cells[2].innerHTML == 'm' ) rowLine.classList.add('male')
    else if ( rowLine.cells[2].innerHTML == 'f') rowLine.classList.add('female')

    if (rowLine.cells[1].innerHTML < 18) rowLine.style="text-decoration: line-through"
     
    console.log(rowLine)



  }



}

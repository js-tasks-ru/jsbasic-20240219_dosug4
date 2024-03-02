function makeDiagonalRed(table) {
  let rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let cell = row.cells[i];
    cell.style.backgroundColor = 'red';
    }
}

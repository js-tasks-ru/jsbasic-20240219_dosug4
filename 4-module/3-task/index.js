function highlight(table) {
  let rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    let cells = row.cells;

    let availability = cells[3].getAttribute('data-available');
    if (availability === 'true') {
      row.classList.add('available');
    } else if (availability === 'false') {
      row.classList.add('unavailable');
    } else {
      row.setAttribute('hidden', true);
    }
    
    if (cells[2].textContent === 'm') {
      row.classList.add('male');
    } else if (cells[2].textContent === 'f') {
      row.classList.add('female');
    }

    let ageCell = row.querySelector('td:nth-child(2)');
    let age = parseInt(ageCell.textContent);

    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}

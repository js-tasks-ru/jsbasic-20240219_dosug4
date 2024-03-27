/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem;
  constructor(rows) {
    let table = document.createElement("table");
    for (let item of rows) {
      let row = table.insertRow();
      let Name = row.insertCell();
      let Age = row.insertCell();
      let Salary = row.insertCell();
      let City = row.insertCell();
      let Cross = row.insertCell();
      Name.innerHTML = item["name"];
      Age.innerHTML = item["age"];
      Salary.innerHTML = item["salary"];
      City.innerHTML = item["city"];
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      Cross.append(deleteButton);
    }
    table.addEventListener("click", function (event) {
      if (event.target.closest("button").innerText === "X") {
        event.target.closest("tr").remove();
      }
    });
    this.elem = table;
  }  
}

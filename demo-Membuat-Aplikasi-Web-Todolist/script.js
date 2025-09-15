(function () {
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");
  const newAction = document.createElement("td");

  newCell.textContent = "Belajar JavaScript";
  newAction.innerHTML =
    "<button class='btn'><i class='fas fa-trash-alt'></i></button>";

  const todoTable = document.getElementById("todos");
  const bodyTable = todoTable.querySelector("tbody");
  bodyTable.appendChild(newRow);
  newRow.append(newCell, newAction);
})();

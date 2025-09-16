(function () {
  const todoListTable = document.querySelector("#todos");
  const todoListTableBody = document.querySelector("#todos tbody");
  const todoForm = document.getElementById("todo-form");
  const titleTodo = todoForm.querySelector("#title");

  todoForm.onsubmit = (event) => {
    event.preventDefault();

    const valueTitle = titleTodo.value;

    const newTodo = todoItemTemplate({
      id: Number(new Date()),
      title: valueTitle,
      completed: false,
    });

    todoListTableBody.appendChild(newTodo);
  };

  let allTodos = [];

  function todoItemTemplate(todo) {
    const trElement = document.createElement("tr");

    const titleTdElement = document.createElement("td");
    titleTdElement.textContent = todo.title;

    const actionTdElement = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
    removeButton.classList.add("btn");
    actionTdElement.appendChild(removeButton);

    trElement.append(titleTdElement, actionTdElement);
    return trElement;
  }
})();

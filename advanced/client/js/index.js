const main = () => {
  const parent = document.getElementById("todos");
  const api = "http://localhost:3000/todo";

  fetch(api)
    .then((resp) => resp.json())
    .then((resp) => {
      for (const todo of resp.todoList) {
        console.log(todo)
        const next = document.createElement("li");
        next.className = "todo-item";
        next.innerHTML = `
          <label class="todo-toggle__container">
            <input
              data-todo-id="${todo.id}"
              type="checkbox"
              class="todo-toggle"
              value="checked"
              ${todo.done ? "checked" : ""}
            />
            <span class="todo-toggle__checkmark"></span>
          </label>
          <div class="todo-name">${todo.name}</div>
          <div data-todo-id="${todo.id}" class="todo-remove-button">x</div>
        `;
        parent.appendChild(next);
      }
    });
};

main();

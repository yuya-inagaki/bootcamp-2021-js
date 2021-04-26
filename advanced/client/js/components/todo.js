class Todo {
  constructor(parent, { id, name, done }) {
    this.parent = parent
    this.id = id
    this.name = name
    this.done = done
  }

  render() {
    const next = document.createElement("li");
    next.className = "todo-item";
    next.innerHTML = `
      <label class="todo-toggle__container">
        <input
          data-todo-id="${this.id}"
          type="checkbox"
          class="todo-toggle"
          value="checked"
          ${this.done ? "checked" : ""}
        />
        <span class="todo-toggle__checkmark"></span>
      </label>
      <div class="todo-name">${this.name}</div>
      <div data-todo-id="${this.id}" class="todo-remove-button">x</div>
    `;
    this.parent.appendChild(next);
  }
}

export default Todo;

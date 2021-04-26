class Todo {
  constructor(parent, { id, name, done }) {
    this.parent = parent
    this.id = id
    this.name = name
    this.done = done
    this.element = document.createElement("li");
    this.element.className = "todo-item";
  }

  mount() {
    const api = "http://localhost:3000/todo"
    const checkbox = this.element.querySelector('.todo-toggle')
    checkbox.addEventListener('click', () => {
      fetch(api + '/' + this.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.name,
          done: !this.done
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Update:', data)
        this.done = !this.done
      })

    })
  }

  render() {
    this.element.innerHTML = `
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
    this.parent.appendChild(this.element)
    this.mount()
  }
}

export default Todo;

import Todo from "./todo.js"

class TodoForm {
  constructor() {
    this.button = document.querySelector(".todo-form__submit");
    this.form = document.querySelector(".todo-form__input");
  }

  mount() {
    this.button.addEventListener("click", (e) => {
      e.preventDefault();

      const api = "http://localhost:3000/todo"
      const parent = document.getElementById("todos")

      const todo = {
        name: this.form.value
      }

      fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Create:', data);
          const component = new Todo(parent, data)
          component.render()
        })

      this.form.value = "";
    })
  }
}

export default TodoForm;

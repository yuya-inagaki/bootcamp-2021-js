import Todo from "./components/todo.js"
import TodoForm from "./components/todo-form.js"

const main = () => {
  new TodoForm().mount()

  const parent = document.getElementById("todos")
  const api = "http://localhost:3000/todo"

  fetch(api)
    .then((resp) => resp.json())
    .then((resp) => {
      for (const todo of resp.todoList) {
        // create Todo instance
        const component = new Todo(parent, todo)
        component.render()
      }
    });
};

main();

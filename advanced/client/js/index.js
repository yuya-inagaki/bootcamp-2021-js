import Todo from "./components/todo.js"

const main = () => {
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

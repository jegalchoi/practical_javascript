let todoList = {
  todos: [],
  displayTodos: function () {
    debugger;
    if (this.todos.length === 0) {
      console.log('Todo list is empty.');
    } else {
      console.log('My Todos: ');
      for (let i = 0; i < this.todos.length; i += 1) {
        if (this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodos: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function (pos, todoText) {
    this.todos[pos].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (pos) {
    this.todos.splice(pos, 1);
    this.displayTodos();
  },
  toggleCompleted: function (pos) {
    let todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function () {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (let i = 0; i < totalTodos; i += 1) {
      if (this.todos[i].completed) {
        completedTodos += 1;
      }
    }

    if (completedTodos == totalTodos && totalTodos != 0) {
      for (let i = 0; i < totalTodos; i += 1) {
        if (this.todos[i].completed) {
          this.todos[i].completed = false;
        }
      }
    } else {
      for (let i = 0; i < totalTodos; i += 1) {
        if (!this.todos[i].completed) {
          this.todos[i].completed = true;
        }
      }
    }

    this.displayTodos();
  },
};

let displayTodosButton = document.getElementById('displayTodosButton');
let toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', () => todoList.displayTodos());

toggleAllButton.addEventListener('click', () => todoList.toggleAll());

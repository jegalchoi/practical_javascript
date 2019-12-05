let todoList = {
  todos: [],
  displayTodos: function () {
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
  addTodo: function (todoText) {
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

let handlers = {
  displayTodos: () => todoList.displayTodos(),
  addTodo: function() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    let changeTodoPosInput = document.getElementById('changeTodoPosInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');

    todoList.changeTodo(changeTodoPosInput.value, changeTodoTextInput.value);
    changeTodoPosInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    let deleteTodoPosInput = document.getElementById('deleteTodoPosInput');
    todoList.deleteTodo(deleteTodoPosInput.value);
    deleteTodoPosInput.value = '';
  },
  toggleCompleted: function() {
    let toggleCompletedPosInput = document.getElementById('toggleCompletedPosInput');
    todoList.toggleCompleted(toggleCompletedPosInput.value);
    toggleCompletedPosInput.value = '';
  },
  toggleAll: () => todoList.toggleAll(),
};
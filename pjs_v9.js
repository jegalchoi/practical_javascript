let todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo: function (pos, todoText) {
    this.todos[pos].todoText = todoText;
  },
  deleteTodo: function (pos) {
    this.todos.splice(pos, 1);
  },
  toggleCompleted: function (pos) {
    let todo = this.todos[pos];
    todo.completed = !todo.completed;
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
  },
};

let handlers = {
  addTodo: function () {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    let changeTodoPosInput = document.getElementById('changeTodoPosInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');

    todoList.changeTodo(changeTodoPosInput.value, changeTodoTextInput.value);
    changeTodoPosInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function () {
    let deleteTodoPosInput = document.getElementById('deleteTodoPosInput');
    todoList.deleteTodo(deleteTodoPosInput.value);
    deleteTodoPosInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function () {
    let toggleCompletedPosInput = document.getElementById('toggleCompletedPosInput');
    todoList.toggleCompleted(toggleCompletedPosInput.value);
    toggleCompletedPosInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
};

let view = {
  displayTodos: function() {
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    for (let i = 0; i < todoList.todos.length; i += 1) {
      let todoLi = document.createElement('li');
      let todo = todoList.todos[i];
      let todoTextWithCompletion = '';

      if (todo.completed) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
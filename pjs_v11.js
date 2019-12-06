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

    this.todos.forEach(function(todo) {
      if (todo.completed) {
        completedTodos += 1;
      }
    });
    
    this.todos.forEach(function(todo) {
      if (completedTodos == totalTodos && totalTodos != 0) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
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
  deleteTodo: function (pos) {
    todoList.deleteTodo(pos);
    view.displayTodos();
  },
  toggleCompleted: function () {
    let toggleCompletedPosInput = document.getElementById('toggleCompletedPosInput');
    todoList.toggleCompleted(toggleCompletedPosInput.value);
    toggleCompletedPosInput.value = '';
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  },
};

let view = {
  displayTodos: function () {
    let that = this;
    let todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function(todo, pos) {
      let todoLi = document.createElement('li');
      let todoTextWithCompletion = '';

      if (todo.completed) {
        todoTextWithCompletion = '(x) ' + todo.todoText + " ";
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText + " ";
      }

      todoLi.id = pos;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(that.createDeleteButton());
      todosUl.appendChild(todoLi);
    });
  },
  createDeleteButton: function () {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function () {
    let todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function (event) {
      let elementClicked = event.target;

      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  },
};

view.setUpEventListeners();
let todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(pos, todoText) {
    this.todos[pos].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(pos) {
    this.todos.splice(pos, 1);
    this.displayTodos();
  },
  toggleCompleted: function(pos) {
    let todo = this.todos[pos];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
};


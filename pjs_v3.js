let todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  },
  addTodos: function(new_todo) {
    this.todos.push(new_todo);
    this.displayTodos();
  },
  changeTodo: function(pos, new_value) {
    this.todos[pos] = new_value;
    this.displayTodos();
  },
  deleteTodo: function(pos) {
    this.todos.splice(pos, 1);
    this.displayTodos();
  },
};


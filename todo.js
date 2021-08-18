// store
let todos = [
  { todoText: 'Item 1', completed: false },
  { todoText: 'Item 2', completed: false },
  { todoText: 'Item 3', completed: false }
];

// add a new todo
const addTodo = todo => {
  todos.push({ todoText: todo, completed: false });
  displayTodos();
};

// update todos
const editTodo = (index, updatedTodo) => {
  todos[index].todoText = updatedTodo;
  displayTodos();
};

// delete at index
const deleteTodo = index => {
  todos.splice(index, 1);
  displayTodos();
};

// toggle completed
const toggleTodo = index => {
  todos[index].completed = !todos[index].completed;
  displayTodos();
};

// print updates to todos to console
const displayTodos = () => {
  console.log(todos);
};

// show todoText property for all To Dos
const displayTodoText = todo => {
  for (i = 0; i < todos.length; i++) {
    console.log(todo[i].todoText);
  }
};

// show completed property for all To Dos
const displayTodoCompletionStatus = todo => {
  for (i = 0; i < todos.length; i++) {
    console.log(todo[i].completed);
  }
};

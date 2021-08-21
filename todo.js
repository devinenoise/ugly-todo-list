// todos data
let todos = [
  { todoText: 'Item 1', completed: false },
  { todoText: 'Item 2', completed: false },
  { todoText: 'Item 3', completed: false }
];

// add a new todo
const addTodo = () => {
  let todo = addInput.value;
  todos.push({ todoText: todo, completed: false });
  addInput.value = '';
  displayTodos();
};

// edit a todo
const editTodo = () => {
  let index = editIndexInput.value;
  let updatedTodo = editTextInput.value;
  todos[index].todoText = updatedTodo;
  editTextInput.value = '';
  editIndexInput.value = '';
  displayTodos(); 
};

// delete a todo at a given index
const deleteTodo = index => {
  todos.splice(index, 1);
  displayTodos();
};

// toggle completed status on a todo at a given index
const toggleTodo = index => {
  todos[index].completed = !todos[index].completed;
  displayTodos();
};

// toggle completed status on all To Dos and if mixed make all TRUE
const toggleAllTodos = () => {
  // completedTodos is an accumulator for truthiness to check against
  let completedTodos = 0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      // increment completedTodos
      completedTodos++;
    }
  }
  // if completed is true and is same length as the array, change to false
  if (completedTodos === todos.length) {
    for (let i = 0; i < todos.length; i++) {
      todos[i].completed = false;
    }
    // else change all completed to true
  } else {
    for (let i = 0; i < todos.length; i++) {
      todos[i].completed = true;
    }
  }
  displayTodos();
};

// prints updates to todos to the console
const displayTodos = () => {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
};

// show todoText property for all To Dos
const displayTodosText = () => {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].todoText);
  }
};

// show completed property for all To Dos
const displayTodosCompletionStatus = () => {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].completed);
  }
};

// display to dos button
const displayTodosButton = document.getElementById('display-todos-button');
displayTodosButton.addEventListener('click', displayTodos);

// toggle all to dos button
const toggleAllTodosButton = document.getElementById('toggleAll-todos-button');
toggleAllTodosButton.addEventListener('click', toggleAllTodos);

// add to do button
const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', addTodo);

// add todo input field
const addInput = document.getElementById('add-input');

// edit to do button
const editTodoButton = document.getElementById('edit-todo-button');
editTodoButton.addEventListener('click', editTodo);

// edit index input field
const editIndexInput = document.getElementById('edit-index-input');

// edit text input field
const editTextInput = document.getElementById('edit-text-input');

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
const deleteTodo = () => {
  let index = deleteIndexInput.value;
  todos.splice(index, 1);
  deleteIndexInput.value = '';
  displayTodos();
};

// toggle completed status on a todo at a given index
const toggleTodo = () => {
  let index = toggleIndexInput.value;
  todos[index].completed = !todos[index].completed;
  toggleIndexInput.value = '';
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

// prints to dos to the DOM
const displayTodos = () => {
  // clear out existing li's inside of todoList first
  todoList.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    // create the list item for each to do
    const todoItem = document.createElement('li');

    // display the to do objects text and completed status to the DOM
    if (todos[i].completed === true) {
      // if completed is true display with an X
      todoItem.innerText = `[X] ${todos[i].todoText}`;
    } else {
      todoItem.innerText = `[ ] ${todos[i].todoText}`;
    }
    // create delete button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    // append the <li> to the <ul> in the DOM
    todoList.appendChild(todoItem);
    // append button to the li
    todoList.appendChild(removeButton);
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

// delete to do button
const deleteTodoButton = document.getElementById('delete-todo-button');
deleteTodoButton.addEventListener('click', deleteTodo);

// delete at index input field
const deleteIndexInput = document.getElementById('delete-text-input');

// toggle to do button
const toggleTodoButton = document.getElementById('toggle-todo-button');
toggleTodoButton.addEventListener('click', toggleTodo);

// toggle at index input field
const toggleIndexInput = document.getElementById('toggle-text-input');

// grab the to do list <ul> id
const todoList = document.getElementById('todo-list');

displayTodos();

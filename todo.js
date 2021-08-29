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

// edit a to do
const editTodo = event => {
  let index = event.currentTarget.id.split('-')[1];
  let updatedTodo = window.prompt('Update Your To Do', todos[index].todoText);
  if ((updatedTodo === null) | (updatedTodo === '')) {
    return todos[index].todoText;
  }
  todos[index].todoText = updatedTodo;
  displayTodos();
};

// delete a to do
const removeTodo = event => {
  const todoToRemove = event.currentTarget.id.split('-')[1];
  todos.splice(todoToRemove, 1);
  displayTodos();
};

// toggle completed status on a to do at a given index
const toggleTodo = event => {
  // setting the new index position with currentTarget and giving toggle button a unique id from remove with the split method
  let todoToToggle = event.currentTarget.id.split('-')[1];
  // using the new index value assign its value to the opposite of itself
  todos[todoToToggle].completed = !todos[todoToToggle].completed;
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

    // create toggle button with text
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle';
    // Add the event listener to the toggle button
    toggleButton.addEventListener('click', toggleTodo);
    // setting the id to i plus a prefixed string so the button toggles the correct to do uniquely
    toggleButton.id = `toggle-${i}`;

    // create edit button with text
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    // Add the event listener to the edit button
    editButton.addEventListener('click', editTodo);
    // setting the id to i plus a prefixed string so the button edits the correct to do uniquely
    editButton.id = `edit-${i}`;

    // create remove button with text
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    // Add the event listener to the remove button
    removeButton.addEventListener('click', removeTodo);
    // setting the id to i plus a prefixed string so the button removes the correct to do uniquely
    removeButton.id = `remove-${i}`;

    // append the <li> to the <ul> in the DOM
    todoList.appendChild(todoItem);
    // append toggle button to the li
    todoList.appendChild(toggleButton);
    // append toggle button to the li
    todoList.appendChild(editButton);
    // append button to the li
    todoList.appendChild(removeButton);
  }
};

// toggle all to dos button
const toggleAllTodosButton = document.getElementById('toggleAll-todos-button');
toggleAllTodosButton.addEventListener('click', toggleAllTodos);

// add to do button
const addTodoButton = document.getElementById('add-todo-button');
addTodoButton.addEventListener('click', addTodo);

// add to do input field
const addInput = document.getElementById('add-input');

// grab the to do list <ul> id
const todoList = document.getElementById('todo-list');

displayTodos();

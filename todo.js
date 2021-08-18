// todos data
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
  let completedTodos = 0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      completedTodos++;
    }
  }
  // if completed is true, change to false
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
const displayTodoText = todo => {
  for (let i = 0; i < todos.length; i++) {
    console.log(todo[i].todoText);
  }
};

// show completed property for all To Dos
const displayTodoCompletionStatus = todo => {
  for (let i = 0; i < todos.length; i++) {
    console.log(todo[i].completed);
  }
};

// store
let todos = ['Item 1', 'Item 2', 'Item 3'];

// display
console.log(`Your To Do list contains`, todos);

// add a todo
const addTodo = todo => {
  todos.push(todo);
  console.log(todos);
};

// edit a todo
const editTodo = (index, newTodo) => {
  todos[index] = newTodo;
  console.log(todos);
};

// delete todo
const deleteTodo = index => {
  todos.splice(index, 1);
  console.log(todos);
};

// store
let todos = ['Item 1', 'Item 2', 'Item 3'];

// display
console.log(`Your To Do list contains`, todos);

// add
const addTodo = todo => {
  todos.push(todo);
  console.log(todos);
};

// edit
const editTodo = (index, newTodo) => {
  todos[index] = newTodo;
  console.log(todos);
};

// delete
const deleteTodo = index => {
  todos.splice(index, 1);
  console.log(todos);
};

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
const editTodo = (position, todo) => {
  todos[position] = todo;
  console.log(todos);
};

// delete (start, until)
//todos.splice(0, 2);

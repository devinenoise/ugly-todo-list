// store
let todos = ['Item 1', 'Item 2', 'Item 3'];

// display
console.log(`Your To Do list contains`, todos);

// add
const addTodo = todo => {
  todos.push(todo);
  console.log('Your To Do', `'`,todo,`'`, 'was added to', todos);
};

// edit
todos[0] = 'Item 1 Updated';

// delete (start, until)
todos.splice(0, 2);

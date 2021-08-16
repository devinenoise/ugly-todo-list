// store
let todos = [
  { todoText: 'Item 1', completed: false },
  { todoText: 'Item 2', completed: false },
  { todoText: 'Item 3', completed: false }
];

// rewrite so that the argument passed in is saved to a property on an object
const addTodo = todo => {
  todos.push(todo);
  //console.log(todos);
};

// rewrite so that second argument is saved to property on object at `index`
const editTodo = (index, newTodo) => {
  todos[index] = newTodo;
  //console.log(todos);
};

// delete
const deleteTodo = index => {
  todos.splice(index, 1);
  //console.log(todos);
};

addTodo('new item');

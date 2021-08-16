// store
let todos = [
  { todoText: 'Item 1', completed: false },
  { todoText: 'Item 2', completed: false },
  { todoText: 'Item 3', completed: false }
];

const addTodo = todo => {
  todos.push({ todoText: todo, completed: false });
};

const editTodo = (index, updatedTodo) => {
  todos[index].todoText = updatedTodo;
  console.log(todos);
};

// delete
const deleteTodo = index => {
  todos.splice(index, 1);
};


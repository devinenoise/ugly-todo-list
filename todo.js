// store
let todos = ['Item 1', 'Item 2', 'Item 3'];

// display
console.log(`Your To Do list contains`, todos);

// add
todos.push('Item 4');

// edit
todos[0] = 'Item 1 Updated';

// delete (start, until)
todos.splice(0, 2);

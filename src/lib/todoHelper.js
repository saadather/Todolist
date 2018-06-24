export const addTodo = (item, elem) => item.concat(elem);

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleTodo = todo => ({ ...todo, completed: !completed });

export const updatedTodo = (todoList, todo) => {
  const updatedTodoIndex = todoList.findIndex(item => item.id === todo.id);
  return [
    ...todoList.slice(0, updatedTodoIndex),
    updatedTodoIndex,
    updatedTodoIndex + 1
  ];
};

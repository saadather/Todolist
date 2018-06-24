import React from "react";
import { TodoItem } from "./todoItem";

export const TodoList = props => (
  <div className="Todo-App">
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} {...todo} handleToggle={todo.handleToggle} />
        ))}
      </ul>
    </div>
  </div>
);

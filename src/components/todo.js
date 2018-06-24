import React from "react";

export const Todo = props => (
  <form onSubmit={props.handleOnSubmit}>
    <input
      type="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}
    />
  </form>
);

import React from "react";

export const TodoItem = props => (
  <li>
    <input
      type="checkbox"
      onChange={() => props.handleToggle(props.id)}
      checked={props.completed}
    />
    {props.name}
  </li>
);

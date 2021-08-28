import React from "react";

export const TodoForm = ({ handleSubmit, todo, handleChange }) => {
  return (
    <div>
        <input value={todo.title} onChange={ handleChange } onKeyUp={ (e) => e.keyCode == 13 && handleSubmit(e) } name="title" type="text" />
    </div>
  );
};

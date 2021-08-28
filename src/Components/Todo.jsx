import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Pending } from "./Pending";
import { Completed } from "./Completed";
import { v4 as uuid } from 'uuid';

let todoInit = {
  title: "",
  status: false,
};

export const Todo = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [todo, setTodo] = useState(todoInit);

  const handleSubmit = (e) => {
    setAllTodos([...allTodos, { ...todo, id: uuid() }]);
    setTodo(todoInit);
  };
  const handleChange = (e) => {
    const value = e.target.value;

    setTodo({ ...todo, title: value });
  };

  const handleToggle = (id) => {
    let copy = allTodos.map( item => item.id === id ? { ...item, status: !item.status } : item );

    setAllTodos(copy);
  }

  
  return (
    <div>
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Pending handleToggle={handleToggle} list={allTodos} />
      <Completed handleToggle={handleToggle} list={allTodos} />
    </div>
  );
};

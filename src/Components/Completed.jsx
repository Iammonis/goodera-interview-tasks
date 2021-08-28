import React from "react";
import { TodoItem } from "./TodoItem";

export const Completed = ({ list, handleToggle }) => {

    const getLength = () => {
        let copy = list.filter( item => item.status )
        return copy.length;
    }
  return (
    <div>
        <h2>completed - { getLength() }</h2>
      {list
        ?.filter((item) => item.status)
        .map((item) => (
          <TodoItem handleToggle={handleToggle} data={item} />
        ))}
    </div>
  );
};

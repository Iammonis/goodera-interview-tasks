import React from "react";
import { TodoItem } from "./TodoItem";

export const Pending = ({ list, handleToggle }) => {

    const getLength = () => {
        let copy = list.filter( item => !item.status )
        return copy.length;
    }
  return (
    <div>
        <h2>pending - { getLength() }</h2>

      {list
        ?.filter((item) => !item.status)
        .map((item) => (
          <TodoItem handleToggle={handleToggle} data={item} />
        ))}
    </div>
  );
};

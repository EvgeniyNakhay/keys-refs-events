import { useEffect, useReducer, useRef, useState } from "react";

export default function List({ todos, setTodos }) {
  const handleAddExlamationSign = (id) => {
    const newArray = todos.map((item) => {
      if (item.id === id) {
        return { ...item, title: "!!!" + item.title };
      } else {
        return item;
      }
    });
    setTodos(newArray);
  };

  return (
    <ul>
      {todos.map((item) => {
        return (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleAddExlamationSign(item.id)}>
              add "!!!"
            </button>
          </li>
        );
      })}
    </ul>
  );
}

import { useEffect, useReducer, useRef, useState } from "react";

export default function List({ items }) {
  function handleExclamationMark(id) {
    items.map((item) => {
      if (item.id === id) {
        return { ...item, title: "!!!" + title };
      }
      return item;
    });
  }

  const prevCount = useRef();

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleExclamationMark(item.id)}>!!!</button>
          </li>
        );
      })}
    </ul>
  );
}

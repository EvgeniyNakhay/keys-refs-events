import { useEffect, useState } from "react";

export default function List({ items }) {
  function handleExclamationMark(id) {
    items.map((item) => {
      if (item.id === id) {
        console.log(item.title);
        return { ...item, title: "!!!" };
      }
      return item;
    });
  }

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

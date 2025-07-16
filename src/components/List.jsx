import { useEffect, useState } from "react";

export default function List({ items }) {
  const [listItems, setListItems] = useState(items);

  function handleExclamationMark(id) {
    setListItems(
      listItems.map((item) => {
        if (item.id === id) {
          item.title = "!!!" + item.title;
        }
        return item;
      })
    );
  }

  return (
    <ul>
      {listItems.map((item) => {
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

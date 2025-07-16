import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [arrayTodos, setArrayTodos] = useState(null);

  // async function fetchData() {
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     setArrayTodos(data);
  //   } catch (e) {
  //     console.log("Ошибка в получении данных", e);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const array = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ];
  const [inputValue, setInputValue] = useState(null);
  const [arrayItem, setArrayItem] = useState(array);

  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  function handleClick(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      console.log(inputValue);
      console.log(arrayItem);
      setArrayItem([
        ...arrayItem,
        {
          userId: 1,
          id: 2,
          title: { inputValue },
          completed: false,
        },
      ]);
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => handleClick(e)}
        onKeyDown={(e) => handleSubmit(e)}
      />
      <button onClick={focusInput}>Click</button>
      <List items={arrayItem} />
    </>
  );
}

export default App;

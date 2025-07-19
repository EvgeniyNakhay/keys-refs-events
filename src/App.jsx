import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
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
  const [inputValue, setInputValue] = useState("");
  const [arrayItems, setArrayItem] = useState(array);

  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setArrayItem([
        {
          userId: 1,
          id: uuidv4(),
          title: inputValue,
          completed: false,
        },
        ...arrayItems,
      ]);
      setInputValue("");
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleSubmit(e)}
      />
      <button onClick={focusInput}>Click</button>
      <List items={arrayItems} />
    </>
  );
}

export default App;

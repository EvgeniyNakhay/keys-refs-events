import { Fragment, useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [text, setText] = useState("");

  const ref = useRef();

  const array = [
    {
      id: 1,
      title: "Buy milk",
      completed: false,
    },
    {
      id: 2,
      title: "Maka a dinner",
      completed: false,
    },
    {
      id: 3,
      title: "Clean house",
      completed: false,
    },
    {
      id: 4,
      title: "Call to mom",
      completed: true,
    },
    {
      id: 5,
      title: "Make homework",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(array);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && text.trim()) {
      const newTodo = {
        id: crypto.randomUUID(),
        title: text,
        completed: false,
      };
      setText("");
      setTodos([newTodo, ...todos]);
    }
  };

  return (
    <>
      <input
        ref={ref}
        type="text"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <button onClick={() => ref.current.focus()}>set focus</button>
      <List todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

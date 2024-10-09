import { useState, useEffect } from "react";

const getLocalItems = () => {
  const savedItems = localStorage.getItem("todos");
  if (savedItems) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function Todo() {
  const [data, setData] = useState(getLocalItems());
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(data));
  }, [data]);

  const addTodo = (e) => {
    e.preventDefault();
    setData([...data, input]);
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        {data.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    </>
  );
}

export default Todo;

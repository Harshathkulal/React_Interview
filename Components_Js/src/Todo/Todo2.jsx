import { useEffect, useState } from "react";

function Todo2() {
  const [todo, setTodo] = useState([]);
  // const todoInput = useRef(null);
  const [input, setInput] = useState("");
  console.log(todo);

  const addtodo = (e) => {
    e.preventDefault();
    const newdata = {
      completed: false,
      id: todo.length + 1,
      todo: input,
      // todo:todoInput.current.value,
      userId: Math.floor(Math.random() * 1000),
    };
    setTodo([newdata, ...todo]);
  };

  // useEffect(() => {
  //   fetch('https://dummyjson.com/todos')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTodo(data.todos);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        const data = await response.json();
        setTodo(data.todos);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Fetch operation completed");
      } // End of try-catch block and finally block.
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* <input type="text" ref={todoInput} /> */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addtodo}>Submit</button>
      <ul>
        {todo?.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo2;

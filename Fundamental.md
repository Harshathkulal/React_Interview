## 1. Components

React Components are the building blocks of a React application. They are reusable pieces of UI.
Components can be class-based (older) or function-based (modern, using hooks).

```jsx
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};
```

## 2. JSX (JavaScript XML)

JSX is a syntax extension that allows you to write HTML-like code in JavaScript.
It makes writing and visualizing the UI structure easier, but it compiles down to standard JavaScript using React.createElement().

```jsx
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

// Behind the scenes, this compiles to:
const Greeting = () => {
  return React.createElement("h1", null, "Hello, World!");
};
```

## 3. Props (Properties)

Props are how data is passed from parent components to child components.
Props are read-only and allow you to customize the behavior of a child component.
Example:

```jsx
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Usage
<Greeting name="Harshath" />
```

## 4. State

State is used to store data that can change over time and directly affects how components are rendered.
In functional components, state is managed using the useState hook, while class components manage state with this.state.
Example with useState:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // count is the state, setCount is the function to update it

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
```

## 5. Events Handling

React uses standard HTML event handlers, but they are written in camelCase (onClick, onSubmit, etc.).
Event handlers in React often use functions passed via props or state updates.
Example:

```jsx
const Button = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click me</button>;
};
```

## 6. Conditional Rendering

React allows rendering components or elements conditionally based on certain conditions using JavaScript expressions like if, ternary operators, or logical &&.
Example:

```jsx
const Message = ({ isLoggedIn }) => {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
};
```

## 7. Lists and Keys

When rendering lists of elements, React needs a unique key prop to help identify each item for efficient re-rendering and to optimize performance.
Example:

```jsx
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
```

## 8. Hooks

Hooks are functions that let you use state and other React features (like lifecycle methods) in functional components.
useState: Manage local state.
useEffect: Handle side effects (like data fetching, subscriptions, etc.).
Example of useEffect:

```jsx
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // The empty array ensures the effect runs only once (on component mount)

  return <div>{data ? data : "Loading..."}</div>;
};
```

## 9. One-Way Data Binding

Data flows one-way from parent to child components. This unidirectional flow makes the data structure predictable and easy to debug.

## 10. Virtual DOM

React uses the Virtual DOM to improve performance. It creates a lightweight copy of the actual DOM and calculates the minimal number of changes to update the real DOM.

## 11. Lifting State Up

Sometimes, you need to share state between multiple components. In this case, you move (or lift) the shared state up to the closest common parent component and pass it down as props.
Example:

```jsx
const Parent = () => {
  const [data, setData] = useState('');

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <ChildInput onChange={handleInputChange} />
      <ChildDisplay data={data} />
    </div>
  );
};

const ChildInput = ({ onChange }) => {
  return <input type="text" onChange={onChange} />;
};

const ChildDisplay = ({ data }) => {
  return <p>Data: {data}</p>;
};
```

## 12. Context API

The Context API allows you to share data (state, functions, etc.) between components without passing props manually at every level.
Example:

```jsx
const MyContext = React.createContext();

const Parent = () => {
  const [value, setValue] = useState("Hello from context");

  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = React.useContext(MyContext);
  return <p>{value}</p>;
};
```

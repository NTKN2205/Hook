import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default TodoList;

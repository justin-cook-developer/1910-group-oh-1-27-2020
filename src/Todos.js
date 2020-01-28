import React, { useState, useEffect } from "react";

import { fetchTodos } from "./api";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then((_todos) => setTodos(_todos));
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>Todo: {todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;

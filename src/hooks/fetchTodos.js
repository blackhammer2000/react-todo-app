import { useState, useEffect } from "react";

export function useFetchTodos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editedTask, setEditTask] = useState(null);

  useEffect(() => {
    try {
      setTimeout(() => {
        const todos = JSON.parse(localStorage.getItem("react-todolist-items"));
        if (todos) {
          setTodos(todos);
          setLoading(false);
          setError(null);
        }
      }, 3500);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setTodos(null);
    }
  }, [todos, editedTask]);

  return {
    input,
    todos,
    error,
    loading,
    editedTask,
    setTodos,
    setInput,
    setEditTask,
  };
}

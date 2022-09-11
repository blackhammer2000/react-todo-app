import { useState, useEffect } from "react";

export function useFetchTodos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editedTask, setEditTask] = useState(null);
  const [buttonText, setButtonText] = useState("Add Task");

  useEffect(() => {
    try {
      setTimeout(() => {
        const todos = JSON.parse(localStorage.getItem("react-todolist-items"));
        if (todos || todos === null) {
          todos ? setTodos(todos) : setTodos([]);
          setLoading(false);
          setError(null);
        }
      }, 3500);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setTodos(null);
    }
  }, []);

  return {
    input,
    todos,
    error,
    loading,
    editedTask,
    buttonText,
    setTodos,
    setInput,
    setEditTask,
    setButtonText,
  };
}

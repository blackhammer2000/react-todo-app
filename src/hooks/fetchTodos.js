import { useState, useEffect } from "react";

export function useFetchTodos() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      setTodos([]);
    }
  }, []);

  return { input, todos, error, loading, setTodos, setInput };
}

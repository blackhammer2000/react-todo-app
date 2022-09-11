import React, { useEffect } from "react";
import "./css/bootstrap.min.css";

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editedTask,
  setEditTask,
  buttonText,
  setButtonText,
}) => {
  useEffect(() => {
    localStorage.setItem("react-todolist-items", JSON.stringify(todos));
  }, [todos]);

  const formSubmition = (e) => {
    e.preventDefault();
    if (input) {
      if (e.target.innerText === "Add Task") {
        setTodos([
          ...todos,
          { id: crypto.randomUUID(), body: input, completed: false },
        ]);
      } else {
        setTodos(
          todos.map((todo) => {
            if (todo.id === editedTask.id) {
              return { ...editedTask, body: input };
            } else {
              return todo;
            }
          })
        );
        setEditTask(null);
      }
      setButtonText("Add Task");
      setInput("");
      // localStorage.setItem("react-todolist-items", JSON.stringify(todos));
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-4">
      <form
        className="form d-flex justify-content-center align-items-center w-75"
        onSubmit={(e) => formSubmition(e)}
      >
        <div className="form-group d-flex w-100 justify-content-center align-items-center">
          <input
            type="text"
            className="form-control mr-3 w-50"
            placeholder="Enter New Task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={(e) => formSubmition(e)}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

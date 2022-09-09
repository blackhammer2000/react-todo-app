import React from "react";
import "./css/bootstrap.min.css";

const Form = ({ input, setInput, todos, setTodos }) => {
  const formSubmition = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), body: input, completed: false }]);
    setInput("");

    localStorage.setItem("react-todolist-items", JSON.stringify(todos));
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
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

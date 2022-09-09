import React from "react";
import "./css/bootstrap.min.css";
import "./css/todolist.css";
import Task from "./Task";

const Todolist = ({ todos, setTodos, editTask }) => {
  const deleteTask = (id) => {
    const selectedTasks = todos.filter((todo) => todo.id !== id);
    setTodos(selectedTasks);

    localStorage.setItem("react-todolist-items", JSON.stringify(todos));
  };

  const setCompleteTaskStatus = (id) => {
    const selectedTask = todos.find((todo) => todo.id === id);
    selectedTask.completed = !selectedTask.completed;
    setTodos(todos);

    localStorage.setItem("react-todolist-items", JSON.stringify(todos));
  };
  return (
    <div className="container mt-3 overflow">
      {todos.map((todo, index) => {
        return (
          <Task
            todo={todo}
            index={index}
            deleteTask={deleteTask}
            setCompleteTaskStatus={setCompleteTaskStatus}
            editTask={editTask}
          />
        );
      })}
    </div>
  );
};

export default Todolist;

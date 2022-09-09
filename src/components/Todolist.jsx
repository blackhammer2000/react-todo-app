import React from "react";
import "./css/bootstrap.min.css";
import "./css/todolist.css";
import Task from "./Task";

const Todolist = ({ todos, setTodos }) => {
  return (
    <div className="container mt-3 overflow">
      {todos.map((todo, index) => {
        return <Task todo={todo} index={index} />;
      })}
    </div>
  );
};

export default Todolist;

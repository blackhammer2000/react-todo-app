import React from "react";
import "./css/bootstrap.min.css";
import "./css/font-awesome-4.7.0/css/font-awesome.css";
import "./css/todolist.css";

const Task = ({ todo, index, deleteTask, setCompleteTaskStatus, editTask }) => {
  return (
    <li className="list-unstyled d-flex justify-content-around border align-items-center mt-2 task-body">
      <div className="w-50 font-italic font-weight-lighter p-2">
        {todo.completed ? (
          <h5 className="text-white-50">
            {index + 1}: {todo.body}
          </h5>
        ) : (
          <h5>
            {index + 1}: {todo.body}
          </h5>
        )}
      </div>
      <div className="button ">
        {todo.completed ? (
          <button
            className="btn btn-success  mr-2"
            onClick={() => setCompleteTaskStatus(todo.id)}
          >
            <i className="fa fa-check"></i>
          </button>
        ) : (
          <button
            className="btn btn-outline-success  mr-2"
            onClick={() => setCompleteTaskStatus(todo.id)}
          >
            <i className="fa fa-check"></i>
          </button>
        )}

        <button
          className="btn btn-outline-warning mr-2"
          onClick={() => editTask(todo.id)}
        >
          <i className="fa fa-edit"></i>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => deleteTask(todo.id)}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;

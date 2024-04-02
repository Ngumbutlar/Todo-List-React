import React from "react";

/**
 * A Todo component
 * @param {*} task The task todo
 * @param {*} handletoggleComplete Function to toggle todo completed state
 *  @param {*} handleDeleteTask Function to delete a todo
 * @returns JSX
 */
export const Todo = ({ task, handletoggleComplete, handleDeleteTask }) => {
  return (
    <li
      key={task?.id}
      className={`list-group-item d-flex align-items-center ${
        task?.completed ? "completed completed-task" : ""
      }`}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={task?.completed}
        onChange={() => handletoggleComplete(task?.id)}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {task?.text}
      </label>
      <a className="ms-auto" onClick={() => handleDeleteTask(task.id)}>
        <i className="bi bi-trash "></i>
      </a>
    </li>
  );
};

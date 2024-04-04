import { doc, deleteDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";

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
        {task?.item?.task?.text??task?.item.task}
      </label>
      {/* eslint-disable-next-line */}
      <a className="ms-auto" onClick={() => {
        handleDeleteTask(task.id)
        deleteDoc(doc(db, "tasks", task.id))
      }}>
        <i className="bi bi-trash "></i>
      </a>
    </li>
  );
};

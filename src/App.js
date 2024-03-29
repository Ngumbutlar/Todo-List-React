import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setcopletedTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleformSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setcopletedTasks(completedTasks.filter((task) => task.id !== taskId));
  };

  const handletoggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);

    const completedTask = updatedTasks.find((task) => task.id === taskId);
    if (completedTask.completed) {
      setcopletedTasks([...completedTasks, completedTask]);
      setTasks(updatedTasks.filter((task) => task.id !== taskId));
    } else {
      setcopletedTasks(completedTasks.filter((task) => task.id !== taskId));
    }
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="card">
        <div className="card-header w-100">
          <form
            className="row align-content-center justify-content-center g-3"
            onSubmit={handleformSubmit}
          >
            <div className="col-auto">
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Add Task"
                value={inputValue}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="col-auto">
              <button className="btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="card-body w-100">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <p>Task to do - {tasks.length}</p>
            </div>
            <div className="col-auto">
              <ul className="list-group">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className={`list-group-item d-flex align-items-center ${
                      task.completed ? "completed" : ""
                    }`}
                  >
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handletoggleComplete(task.id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {task.text}
                    </label>
                    <a
                      className="ms-auto"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <i className="bi bi-trash "></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="complete-tasks row align-items-center justify-content-center">
            <div className="col-12">
              <p>Completed Tasks - {completedTasks.length}</p>
            </div>
            <div className="col-auto">
              <ul className="list-group">
                {completedTasks.map((task) => (
                  <li
                    key={task.id}
                    className="list-group-item d-flex align-items-center completed-task"
                  >
                    {task.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-4">
        <div className="container text-center">
          <span className="text-muted">All rights reserved @ skye8.tech</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { Todo } from "./components/Todo";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const q = query(collection(db, 'tasks'), orderBy('timestamp', 'desc'));



// const task = {
//   id: Date.now(),
//   text: "",
//   completed: false,
// };

function App() {
  // always initialize the state with the type of expected value.
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    onSnapshot(q, (snapshot) =>{
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
      snapshot.docs.map(doc => console.log(doc.data()))
      
    });
  }, [inputValue])


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  
  };

  const handleformSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(), // remove terminal whitepsaces on the input value
        completed: false,
      };
      addDoc(collection(db, "tasks"), {
        task: newTask,
        timestamp: serverTimestamp(),
      });

      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    // no longer necessary
    // setcopletedTasks(completedTasks.filter((task) => task.id !== taskId));
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

    // const completedTask = updatedTasks.find((task) => task.id === taskId);
    // if (completedTask.completed) {
    //   setcopletedTasks([...completedTasks, completedTask]);
    //   setTasks(updatedTasks.filter((task) => task.id !== taskId));
    // } else {
    //   setcopletedTasks(completedTasks.filter((task) => task.id !== taskId));
    // }
  };

  return (
    <div className="App">
      <h2>Todo App</h2>
      <div className="card">
        <div className="card-header w-100">
          <Form
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleformSubmit={handleformSubmit}
          />
        </div>
        <div className="card-body w-100">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <p>
                Task to do - {tasks.filter((task) => !task.completed).length}
              </p>
            </div>
            <div className="col-auto">
              <ul className="list-group">
                {tasks.map((task) => {
                  return !task.completed ? (
                    <Todo
                      task={task}
                      handletoggleComplete={handletoggleComplete}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ) : (
                    <></>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="complete-tasks row align-items-center justify-content-center">
            <div className="col-12">
              <p>
                Completed Tasks -{" "}
                {tasks.filter((task) => task.completed).length}
              </p>
            </div>
            <div className="col-auto">
              <ul className="list-group">
                {tasks.map((task) => {
                  return task?.completed ? (
                    <Todo
                      task={task}
                      handletoggleComplete={handletoggleComplete}
                      handleDeleteTask={handleDeleteTask}
                    />
                  ) : (
                    <></>
                  );
                })}
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

import React, { useState } from "react";
import "./App.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Build a todo app", completed: true },
    {
      id: 2,
      text: "Write an article about building a todo app",
      completed: false,
    },
    { id: 3, text: "Publish the article", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="todo-container">
      <header>
        <h1>TODO</h1>
      </header>
      <div className="task-summary">
        <div className="progress">
          <span className="progress-text">Task Done</span>
          <span className="progress-count">
            {completedTasks}/{tasks.length}
          </span>
        </div>
      </div>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          placeholder="Write your next task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>+</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <div className="task-content">
              <button
                className={`status ${task.completed ? "done" : ""}`}
                onClick={() => handleToggleTask(task.id)}
              />
              <span>{task.text}</span>
            </div>
            <div className="task-actions">
              <button className="edit">✏️</button>
              <button
                className="delete"
                onClick={() => handleDeleteTask(task.id)}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

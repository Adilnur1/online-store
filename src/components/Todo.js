import React from "react";

const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleCompleted(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <button onClick={() => deleteTodo(task.id)}>delete</button>
        <button onClick={() => editTodo(task.id)}>edit</button>
      </div>
    </div>
  );
};

export default Todo;

import React from "react";

const Task = (props) => {
  
  return (
    <div className="task">
      <p style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>
        {props.taskName}</p>
      <button onClick={() => props.completeTask(props.id)}>complete</button>
      <button onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  );
};

export default Task;

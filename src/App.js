import "./App.css";
import Task from "./Task";
import User from "./User";
import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
   
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  
   
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };
  return (
    <div className="App">
      <div className="addTasks">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => (
          <Task
            taskName={task.taskName}
            id={task.id}
            deleteTask={deleteTask}
            key={task.id}
            completeTask={completeTask}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import "./style/index.css";
import TaskInput from "./components/TaskInput";
import { useReducer,useEffect } from "react";
import TaskCard from "./components/TaskCard";

function taskReducer(tasks, action) {
  if (action.type === "create") {
    return [
      ...tasks,
      {
        id: Date.now(),
        title: action.title,
        date: new Date().toLocaleString(),
        completed: false
      }
    ];
  }

  if (action.type === "delete") {
    return tasks.filter(task => task.id !== action.id);
  }

 if (action.type === "complete") {
  return tasks.map(task => {
    if (task.id === action.id) {
      return {
        ...task,
        completed: !task.completed,
        date: new Date().toLocaleString()
      };
    }

    return task;
  });
}

  if (action.type === "update") {
    return tasks.map(task => {
      if (task.id === action.id) {
        return {
          ...task,
          title: action.title,
          date: new Date().toLocaleString()
        };
      }

      return task;
    });
  }

  return tasks;
}

function App() {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <Header />
      <TaskInput dispatch={dispatch} />

      <div className="task-list">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

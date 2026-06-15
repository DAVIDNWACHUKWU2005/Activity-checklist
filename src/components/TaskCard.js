import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCheck,faPen,faTrash } from "@fortawesome/free-solid-svg-icons";

function TaskCard({ task, dispatch }) {
  return (
    <div className={task.completed ? "task-card completed-card" : "task-card"}>
      <div className={task.completed ? "task-line completed-line" : "task-line"}></div>

      <div className="task-content">
        <h3>{task.title}</h3>
        <p>
          {task.completed ? "Completed: " : "Created: "}
          {task.date}
        </p>
      </div>

      <div className="task-actions">
        <button onClick={() => dispatch({ type: "complete", id: task.id })}>
          <FontAwesomeIcon icon={faCheck} />
        </button>

        <button
          onClick={() => {
            const newTitle = prompt("Edit task", task.title);

            if (newTitle && newTitle.trim() !== "") {
              dispatch({ type: "update", id: task.id, title: newTitle });
            }
          }}
        >
       <FontAwesomeIcon icon={faPen} />
        </button>

        <button onClick={() => dispatch({ type: "delete", id: task.id })}>
         <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
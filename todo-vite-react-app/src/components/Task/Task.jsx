import "./task.css";

function Task({task , onComplete , onDelete}) {
  return (
    <div className="task">
      <button onClick={ ()=> onComplete(task.id)}>Checked</button>
      <p className={task.isCompleted ? "completed" : ""}>{task.text}</p>

      <button onClick={ ()=> onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;

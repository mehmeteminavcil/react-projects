import Task from "../Task/Task";
import "./tasks.css";

function Tasks({tasks , onComplete , onDelete}) {

const numberOfTasks = tasks.length
const completedTask = tasks.filter(task => task.isCompleted).length

  return (
    <>
      <div className="tasks">
        <div>
          <p>Created Tasks</p>
          <span>10</span>
        </div>
        <div>
          <p className="green">Completed Tasks</p>
          <span>{completedTask} of  {numberOfTasks}</span>
        </div>
      </div>
      {tasks.map( task=> (
         <Task  key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
      ))}

    
    </>
  );
}

export default Tasks;

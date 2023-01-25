import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks"

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved){
      setTasks(JSON.parse(saved))
    }
  }

  useEffect( ()=>{
    loadSavedTasks()
  },[])

  function setTaskAndSave(newTasks){
    setTasks( newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(newTasks))
  }


  function addTask(taskText) {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: taskText,
        isCompleted: false,
      },
    ]);
  }


  function toggleTaskStatus(taskId){
      const newTasks = tasks.map( task => {
        if(task.id === taskId){
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        }
        return task
      })
      setTaskAndSave(newTasks)
  }

  function deleteTask(taskId){
    const newTasks = tasks.filter( task => task.id !== taskId)
    setTaskAndSave(newTasks)
  }

  return (
    <div className="App">
      <Header handleAddTask={addTask} />
      <Tasks tasks={tasks}
      onComplete={toggleTaskStatus}
      onDelete={deleteTask}
      />
    </div>
  );
}

export default App;

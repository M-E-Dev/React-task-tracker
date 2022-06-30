import { FaRegTimesCircle } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleDone }) => {
  return (
    <div className={`task ${task.isDone ? "done" : ""}`} onDoubleClick={() => toggleDone(task.id)}>

      <h3>
        {task.text} <FaRegTimesCircle onClick={() => deleteTask(task.id)} style={{color:"red", cursor:"pointer"}} />
      </h3>

      <p>{task.day}</p>

    </div>
  );
};

export default Task;

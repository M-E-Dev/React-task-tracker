import { FaRegTimesCircle } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div>

      <h3>
        {task.text} <FaRegTimesCircle style={{color:"red", cursor:"pointer"}} />{" "}
      </h3>

      <p>{task.day}</p>

    </div>
  );
};

export default Task;

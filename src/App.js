// --------------------------her taska sıra numarası ver-------------------------------------
// -------------------------alta tüm taskları sil butonu koy-------------------------------
import { useState } from "react";
import { version } from "react-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

// useId ???
// iconları kullanmak için --- npm install react-icons --save

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Add A Task",
      day: "Now...",
      isDone: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false)

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  const toggleDone = (toggleDoneId) => {
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const toggleShow = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header title="Task Tracker" showAddTask={showAddTask} toggleShow={toggleShow} />
      {
        showAddTask ? <AddTask addTask={addTask} /> : null
      }
      <hr /><br />
      {tasks.length !== 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <h3 style={{textAlign: "center"}}>There is no task here...</h3>
      )}

      {/* <AddTask  /> */}
    </div>
  );
}

export default App;



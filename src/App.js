import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

// useId ???
// iconları kullanmak için --- npm install react-icons --save

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Add A Task',
      day: 'Now...',
      isDone: false,
    }
  ]);

  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId))
  }

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 +1);
    const addNewTask = {id, ...newTask}
    setTasks([...tasks, addNewTask])
  }

  const toggleDone = (toggleDoneId) => {
    setTasks(tasks.map((task) => task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task))
  }

  return (
    <div className="App">

    <Header title="Task Tracker" />
    <AddTask addTask={addTask} />
    <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
    {/* <AddTask  /> */}

    </div>
  );
}

export default App;

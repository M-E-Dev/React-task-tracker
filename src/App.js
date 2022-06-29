import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

// iconları kullanmak için --- npm install react-icons --save

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study React Project',
      day: 'Feb 5th at 2:30pm',
      isDone: false,
    },
    {
      id: 2,
      text: 'Feed the Dog',
      day: 'Feb 6th at 1:30pm',
      isDone: false,
    },
    {
      id: 3,
      text: 'Attend in-Class',
      day: 'Feb 7th at 20:00pm',
      isDone: false,
    },
  ]);

  return (
    <div className="App">

    <Header title="Task Tracker" />
    <Tasks tasks={tasks} />
    {/* <AddTask  /> */}

    </div>
  );
}

export default App;

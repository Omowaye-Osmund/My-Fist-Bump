import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';
import Tasks from './components/Tasks';
// import Task from './components/Task';
import './App.css';


function App() {
  /*You can add consts here and later use them in your JSX*/
const Fistup = (e) => {
console.log(e)
}

const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Hello!',
        day: "15th jan at 9:00pm",
        reminder: true,
    },
       {
        id: 2,
        text: 'How far?!',
        day: "14th jan at 8:00pm",
        reminder: true,
    },
       {
        id: 3,
        text: 'Hiiiii!',
        day: "15th feb at 9:00pm",
        reminder: false,
    },
       {
        id: 4,
        text: 'Sup!',
        day: "25th feb at 9:00pm",
        reminder: true,
    },
])


 return (
     <div className="App">
    <Header title='FIST-BUMP' />
    <h3>HAVE A BETTER RELATIONSHIP WITH PEOPLE!</h3>
    <Input type="email" placeholder='E-MAIL' />

     <br />
    <br />

    <input type="password" placeholder='PASSWORD' />
    <br />
    <br />
    <Button onClick={Fistup} className='btn' text='Fist-In' />
    <hr />
    <h3>
      DON'T HAVE AN ACCOUNT YET?
      </h3>
    <h4>
      FIST UP AN ACCOUNT WITH US TODAY!
      </h4>
      <Tasks tasks={tasks} />
  </div>
)
} 

export default App;

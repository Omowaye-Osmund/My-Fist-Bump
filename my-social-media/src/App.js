import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';
// import { useState } from 'react';
import Tasks from './components/Tasks';
// import Task from './components/Task';
import './App.css';


function App() {
  /*You can add consts here and later use them in your JSX*/
const Fistup = (e) => {
console.log(e)
}

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
  </div>
)
} 

export default App;

import {useState, useEffect} from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';
import BlogNav from './components/BlogNav'
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';


function App() {
  /*You can add consts here and later use them in your JSX*/
const Fistup = (e) => {
console.log(e.target)
}


 return (
  <Router>
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
       <div>
         <Switch>
             <Route path="/create">
          <Create />
          </Route>
          <Route exact path="/">
          <Home />
          </Route>
        </Switch>
       </div>
      </div>
  </Router>
)
} 

export default App;

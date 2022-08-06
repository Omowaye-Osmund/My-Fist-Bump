import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// import {useState, useEffect} from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';
import Create from './components/Create';



function App() {
  /*You can add consts here and later use them in your JSX*/
const Fistup = (e) => {
console.log(e.target)
}


 return (
  <Router>
     <div className="App">
      <h1>Hello React Developers!</h1>
    <Header title='FIST-BUMP' />
    <h3>HAVE A BETTER RELATIONSHIP WITH PEOPLE!</h3>
    <Input type="email" placeholder='E-MAIL' />

     <br />
    <br />

    <input type="password" placeholder='PASSWORD' />
    <br />
    <br />
    <Button onClick={Fistup} className='btn' text='Fist-In' />
    <Link to="/Create">Forgot Password</Link>
  <hr />
    <h3>
      DON'T HAVE AN ACCOUNT YET?
      </h3>
    <h4>
      FIST UP AN ACCOUNT WITH US TODAY!
      </h4> 
      </div>
      <div>
        <Switch>
          <Route exact path="/Create">
          <Create />
          </Route>
        </Switch>
      </div>
      </Router>
)
} 

export default App;

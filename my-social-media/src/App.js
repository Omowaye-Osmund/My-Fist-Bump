// import {useState, useEffect} from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import  Blogs from './components/Blogs';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



function App() {
  /*You can add consts here and later use them in your JSX*/
const Fistup = (e) => {
console.log(e.target)
}


 return (
       <BrowserRouter>
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
    <Link to="/create">Click here!</Link>
     <Link to="/blog">Click here!</Link>
    
  <hr />
    <h3>
      DON'T HAVE AN ACCOUNT YET?
      </h3>
      
    <h4>
      FIST UP AN ACCOUNT WITH US TODAY!
      </h4> 
      <Blogs />
      </div>
      <Switch>
      <Route path="/signup" component={Home} exact/>
      <Route path="/create" component={Create} />
      <Route path="/blog">
        <Blogs title="All your blogs"/>
      </Route>
      </Switch>
   </BrowserRouter>
)
} 

export default App;

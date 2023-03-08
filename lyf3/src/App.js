import './App.css';
import React,{Component} from 'react'
import Clock from './components/digitalClock';
import CalendarR from './components/calender';
import Quote from './components/quote';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import  { ToDo } from './components/ToDo';
import {Expense} from './components/expense/expense'
import { Study } from './components/study';
import { Journal } from './components/journal';
import { Today } from './components/Today';
import { Week } from './components/week';
import { Month } from './components/month';
import { Shopping } from './components/shopping';
import { Appointments } from './components/appointments';

function App() {
  return (
    <div className="App">

      <header>LYF3 "LIFE"</header>
      <Clock/>
      <CalendarR/>
      <Quote/>
<>
<nav>
  <ul>
    <li>
      <Link to ="/todo">To Do | </Link>
    </li>
    <li>
      <Link to ="/expense">Expense Tracker | </Link>
    </li>
    <li>
      <Link to ="/study">Study Room | </Link>
    </li>
    <li>
      <Link to ="/journal">Journal </Link>
    </li>
  </ul>
</nav>
    <Routes>
      <Route path="/todo" element = {<ToDo />} >
        <Route path = "today" element = {<Today />} />
        <Route path = "week" element ={<Week/>} />
        <Route path = "month" element= {<Month/>}/>
        <Route path= "shopping" element = {<Shopping/>}/>
        <Route path= "appointments" element= {<Appointments/>}/>
        </Route>
      <Route path="/expense" element = {<Expense />} />
      <Route path="/study" element = {<Study />} />
      <Route path="/journal" element = {<Journal />} />
    </Routes> 
    </>

    




    </div>
  );
}

export default App;

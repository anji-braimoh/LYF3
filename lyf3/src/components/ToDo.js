// import React from 'react';
// import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import './ToDo.css';

// const params = useParams()

export function ToDo() {
  return (
    <div className='toDo'>
        <h1>To do </h1>
        <div className='toDoNav'>
            <ul className='toDoUl'>
                <li className='toDoLi'>
            <Link to = "today">Today's Schedule</Link>
            </li>
            <li className='toDoLi'>
            <Link to = "week">This Weeks Goals</Link>
            </li>
            <li className='toDoLi'>
            <Link to = "month">This Months Goals</Link>
            </li>
            <li className='toDoLi'>
            <Link to=  "shopping">Shopping List</Link>
            </li>
            <li className='toDoLi'>
            <Link to = "appointments">Upcoming Appointments</Link>
            </li>
</ul>
        </div>
        <Outlet/>
    </div>
  )
   
   
  
}


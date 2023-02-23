import React from 'react';
import { useState, useEffect } from 'react';
import './digitalClock.css';




function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className='ClockString'>
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;
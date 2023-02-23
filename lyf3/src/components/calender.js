import Calendar from 'react-calendar'
import './calender.css';

function CalendarR() {
    return (
      <div className='calenderContainer'>
        <Calendar className="calender" calendarType='US' />

      </div>
    );
  }
  
  export default CalendarR;
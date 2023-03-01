import React, {useState,useEffect} from "react"
import './study.css';



export function Study() {
const [minutes,setMinutes] = useState(25)
const [seconds,setSeconds]= useState(0)
const [displayMessage,setDisplayMessage]= useState(false)

useEffect(() => {
  let interval = setInterval(()=>{
clearInterval(interval)

if (seconds===0){
    if (minutes!==0){
        setSeconds(59)
        setMinutes(minutes - 1)
    } else {
        let minutes = displayMessage ? 24:14
        let seconds = 59

        setSeconds(seconds)
        setMinutes(minutes)
        setDisplayMessage(!displayMessage)
    }
} else{
    setSeconds (seconds -1)
}
  },1000)
}, [seconds]) //gives us a side effect we can run whenever something happens, so each time we update seconds, we want something to happen in use effect


const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
const timerSeconds = seconds < 10 ? `0${seconds}`: seconds
 

    return <div className="pomodoro">
        <p>Infinite Pomodoro Timer</p>
        <p className="info"><b>"25 minute </b>study session with a <b>15 minute</b> Break"</p>
        <div className="message">
            {displayMessage && <div>Break Time! New Session starts in :</div>}
        </div>
        <div className="timer">
            {timerMinutes}:{timerSeconds}
            </div>
</div>
    
}
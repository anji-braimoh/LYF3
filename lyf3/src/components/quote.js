import React from 'react';
import { useState, useEffect } from 'react';
import './quote.css';

function Quote(){

    const [quote,setQuote] = useState('')
    // http://api.quotable.io/random

    useEffect(()=>{
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
                setQuote(quote.content)
            }
        )

},[])

let fetchNewQuote = () =>{
    fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quote) => {
                setQuote(quote.content)
            }
        )

}
    return(
        <div className='quote-container'>
        <div className='quote'>
            <h2>"{quote}"</h2>
          
        </div>
        <button className='qbtn' onClick={fetchNewQuote}>New Quote</button>
        </div>
    )
}

export default Quote;
import React, { useState, useEffect } from 'react';

import Timer from './components/timer';
import AppButton from './components/appButton';
import './App.css';

const App = () => {
    // use speed of 1000 for a second or change is to a less number if you want it to be faster
    const speed = 10;
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0);
    const [play, setPlay] = useState(false)

    useEffect(() => {
        const myInterval = setInterval(timer, speed);
        // when component is unmounting we are clearing the interval
        return () => clearInterval(myInterval);
    });

    const timer = () => {
        if (play) {
            setSeconds(seconds + 1);
            if ( seconds >= 59 ) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
            if (minutes >= 59) {
                setHours(hours+1);
                setMinutes(0);
            }
        }
    }

    const reset = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const stopOrPlay = () => {
        setPlay(!play)
    }

    return (
        <div className="App">
            <div className='App_header'>
                <h1>time watcher</h1>
            </div>
            <Timer
                seconds={ seconds }
                minutes={ minutes }
                hours={ hours }
            />
            <div className='btn-container'>
                <AppButton clickHandler={ reset } name='Reset' style={ play ?{ opacity: .2, pointerEvents: "none" }: {}} />
                { !play ?
                    <AppButton clickHandler={ stopOrPlay }
                               style={{ marginLeft: '100px', backgroundColor: '#008700', color: "#93e293", opacity: .8 }}
                               name='Play'
                    />:
                    <AppButton
                        clickHandler={ stopOrPlay }
                        style={{ marginLeft: '100px', backgroundColor: '#4c0101', color: '#ff0202' }}
                        name='stop'
                    />
                }
            </div>
        </div>
    );
}

export default App;
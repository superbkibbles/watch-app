import React, { useState, useEffect } from 'react';
import { interval } from 'rxjs';

import Timer from './components/timer';
import AppButton from './components/appButton';
import './App.css';



const sec$ = interval(1000);

const App = () => {
    const [seconds, setSeconds] = useState(0);
    const [play, setPlay] = useState(false);
    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        let subscription = sec$.subscribe(() => {
            if (play && !waiting) {
                setSeconds(seconds + 1);
            }
        });

        return () => subscription.unsubscribe();
    }, [seconds, play, waiting])



    const reset = () => {
        setSeconds(0);
    }

    const stopOrPlay = () => {
        setPlay(!play)
    }

    const wait = () => {
        setWaiting(true);
        setTimeout(() => {
            setWaiting(false)
        }, 1000)
    }

    return (
        <div className="App">
            <div className='App_header'>
                <h1>time watcher</h1>
            </div>
            <Timer
                seconds={ seconds }
            />
            <div className='btn-container'>
                {
                    !play && !waiting?
                        <AppButton
                            clickHandler={ reset }
                            name='Reset'
                            style={ play || seconds < 1 ?
                                { opacity: .2, pointerEvents: "none" }:
                                {}}
                        />:
                        <AppButton
                            clickHandler={ wait }
                            name='Wait'
                            style={
                                waiting? { opacity: .2, pointerEvents: "none" }:
                            { background: '#2828e0' }}
                        />
                }

                { !play ?
                    <AppButton
                        clickHandler={ stopOrPlay }
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
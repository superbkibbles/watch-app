import React, { useState, useEffect } from 'react';

import Timer from './components/timer';
import AppButton from './components/appButton';
import './App.css';

//testing
import { interval } from 'rxjs';
import { share } from 'rxjs/operators';


const sec$ = interval(1000).pipe(
    share()
)

const App = () => {
    const [seconds, setSeconds] = useState(0);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        let subscription = sec$.subscribe(() => {
            if (play) {
                setSeconds(seconds + 1);
            }
        });

        return () => subscription.unsubscribe();
    }, [seconds, play])



    const reset = () => {
        setSeconds(0);
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
            />
            <div className='btn-container'>
                <AppButton
                    clickHandler={ reset }
                    name='Reset'
                    style={ play || seconds < 1 ?
                    { opacity: .2, pointerEvents: "none" }:
                    {}}
                />
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
import React from 'react';

import './timer.css';

const Timer = ({ seconds, minutes, hours }) => {
    const ss = seconds.toString().length > 1 ?  seconds: "0" + seconds.toString();
    const mm = minutes.toString().length > 1 ?  minutes: "0" + minutes.toString();
    const hh = hours.toString().length > 1 ?  hours: "0" + hours.toString();
    return (
        <div className='timer'>
            <h1>{ hh } : { mm } : { ss } </h1>
        </div>
    );
};

export default Timer;
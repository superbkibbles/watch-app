import React from 'react';

import './timer.css';

const Timer = ({ seconds }) => {
    const getSeconds = () => {
        return ('0' + seconds % 60).slice(-2)
    }
    const getMinutes = () => {
        const minutes = Math.floor((seconds / 60) % 60)
        return ('0' + minutes).slice(-2)
    }

    const getHours = () => {
        const hours = Math.floor((seconds / 3600))
        return ('0' + hours).slice(-2)
    }
    return (
        <div className='timer'>
            <h1> { getHours() } : { getMinutes() }: { getSeconds() } </h1>
        </div>
    );
};

export default Timer;
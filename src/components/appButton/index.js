import React from 'react';

import './button.css';
const AppButton = ({ style, clickHandler, name }) => {
    return <button style={ style } onClick={ clickHandler } className='btn'>{ name }</button>
};

export default AppButton;
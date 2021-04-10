import React from 'react';
import './lead.css'

const Lead = (props) => {
    return (
        <div className='top-menu-lead'>
            {props.text}
        </div>
    )
}

export default Lead;

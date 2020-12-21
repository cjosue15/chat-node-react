import React, { useState } from 'react';
import { getFirstLetter } from '../../helpers/getFirstLetter';
import './Participant.css';

export const Participant = ({ name }) => {
    const [color] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    return (
        <div className='participant'>
            <div className='participant__image' style={{ background: color }}>
                <span>{getFirstLetter(name)}</span>
            </div>
            <small className='participant__name'>{name}</small>
        </div>
    );
};

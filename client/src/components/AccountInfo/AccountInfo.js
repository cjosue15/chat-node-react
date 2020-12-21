import React, { useState } from 'react';
import { getFirstLetter } from '../../helpers/getFirstLetter';
import './AccountInfo.css';

export const AccountInfo = ({ name }) => {
    const [color] = useState(`#${Math.floor(Math.random() * 16777215).toString(16)}`);

    return (
        <div className='accountInfo'>
            <div className='accountInfo__image' style={{ background: color }}>
                <p>{getFirstLetter(name)}</p>
            </div>
            <div className='accountInfo__name'>{name}</div>
        </div>
    );
};

import React from 'react';
import { Link } from 'react-router-dom';
import './InfoBar.css';

export const InfoBar = ({ room }) => {
    return (
        <div className='infoBar'>
            <div className='infoBar-left'>
                <span>{room}</span>
            </div>
            <div className='infoBar-right'>
                <Link to='/'>
                    <i className='fa fa-sign-out' aria-hidden='true'></i>
                </Link>
            </div>
        </div>
    );
};

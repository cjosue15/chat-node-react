import React from 'react';
import { AccountInfo } from '../AccountInfo/AccountInfo';
import { Participants } from '../Participants/Participants';
import './Sidebar.css';

export const Sidebar = ({ users, name }) => {
    return (
        <div className='sidebar'>
            <AccountInfo name={name} />
            <Participants users={users} />
        </div>
    );
};

import React from 'react';
import { Participant } from '../Participant/Participant';
import './Participants.css';

export const Participants = React.memo(function Participants({ users }) {
    return (
        <>
            <p>Active participants</p>
            <div className='participants'>
                <ul>
                    {users && users.length > 0 && users.map(({ id, name }) => <Participant key={id} name={name} />)}
                </ul>
            </div>
        </>
    );
});

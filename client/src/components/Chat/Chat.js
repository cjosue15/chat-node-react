import React, { useEffect } from 'react';
// import queryString from 'query-string';
import io from 'socket.io-client';
const ENDPOINT = 'localhost:5000';

let socket;

export const Chat = ({ location }) => {
    useEffect(() => {
        // const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        console.log(socket);
    }, []);

    return (
        <div className='outerContainer'>
            <div className='container'></div>
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import { InfoBar } from '../InforBar/InfoBar';
import { Messages } from '../Messages/Messages';
import { Input } from '../Input/Input';
import { Sidebar } from '../Sidebar/Sidebar';
const ENDPOINT = 'https://chat-app-backend-node.herokuapp.com/';

let socket;

export const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                console.log(`error ${error}`);
            }
        });

        return () => {
            socket.disconnect();
            socket.off();
        };
    }, [location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        return () => {
            socket.off();
        };
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <div className='chat'>
            <div className='container'>
                <div className='chat__container'>
                    <Sidebar users={users} name={name} />
                    <div className='chat__content'>
                        <InfoBar room={room} />
                        <Messages messages={messages} name={name} />
                        <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

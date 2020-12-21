import React from 'react';
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Message } from '../Message/Message';

export const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className='messages'>
            {messages &&
                messages.length > 0 &&
                messages.map((message, i) => <Message key={i} message={message} name={name} />)}
        </ScrollToBottom>
    );
};

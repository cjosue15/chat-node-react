import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

export const Message = ({ message, name }) => {
    const { user, text } = message;

    // console.log({ message, name });

    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        <div className={`message ${isSentByCurrentUser ? 'end' : 'start'}`}>
            <small className='sent__message'>{user}</small>
            <div className={`message__box ${isSentByCurrentUser ? 'gray' : 'white'}`}>
                <p className='message__box-text'>{ReactEmoji.emojify(text)}</p>
            </div>
        </div>
    );
};

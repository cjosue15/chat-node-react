import React from 'react';
import './Input.css';

export const Input = ({ sendMessage, message, setMessage }) => {
    return (
        <div className='formSend'>
            <form onSubmit={sendMessage} className='formSend__content'>
                <input
                    type='text'
                    value={message}
                    placeholder='Type a message...'
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='sendButton'>
                    <i className='fa fa-paper-plane' aria-hidden='true'></i>
                </button>
            </form>
        </div>
    );
};

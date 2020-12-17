import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Join.css';

export const Join = () => {
    const history = useHistory();

    const [values, setValues] = useState({
        name: '',
        room: '',
    });

    const { name, room } = values;

    const handleCahnge = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && room) {
            history.push(`/chat?name=${name}&room=${room}`);
        }
    };

    return (
        <div className='join'>
            <div className='join__content'>
                <form className='join__form' onSubmit={handleSubmit}>
                    <h1 className='join__heading'>Connect to the world</h1>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='joinInput'
                            onChange={handleCahnge}
                            value={name}
                            autoComplete='off'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='room'
                            placeholder='Room'
                            className='joinInput'
                            onChange={handleCahnge}
                            value={room}
                            autoComplete='off'
                        />
                    </div>
                    <button type='submit' className='btn'>
                        Join
                    </button>
                </form>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/images/world.svg'} height='400' alt='World' />
                </figure>
            </div>
        </div>
    );
};

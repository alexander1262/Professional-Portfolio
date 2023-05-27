'use client'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [state, handleSubmit] = useForm('xvondbeq');
  if (state.succeeded) {
      return <p>Thank you for your message!</p>;
  }

  return (
    <div id='contact'>
        <h1 className='text-4xl font-bold text-center hover:cursor-default mb-6 mt-10'>Contact Me</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center mb-5 items-center'>
            <div>
                <input
                    placeholder='Name'
                    type="text"
                    id="name"
                    name="name"
                    style={{ width: '350px' }}
                    className='border border-black p-1 mb-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    placeholder='Email'
                    type="email"
                    id="email"
                    name="email"
                    style={{ width: '350px' }}
                    className='border border-black p-1 mb-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <textarea
                    placeholder='Message'
                    id="message"
                    name="message"
                    style={{ width: '350px' }}
                    className='border border-black p-1 mb-2'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <div>
                <button type="submit" disabled={state.submitting} className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 border border-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 duration-500">Submit</button>
            </div>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    </div>
  );
};

export default Form;
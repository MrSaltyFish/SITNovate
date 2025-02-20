import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        // Handle login logic here
        setEmail('');
        setPassword('');
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-center items-center bg-gray-100'>
            <div className='bg-white p-8 shadow-lg rounded-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
                <form onSubmit={submitHandler}>
                    <label className='block mb-2 text-lg font-medium'>Email</label>
                    <input 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full mb-4 p-3 border rounded-lg' 
                        type='email' 
                        placeholder='email@example.com' 
                    />
                    
                    <label className='block mb-2 text-lg font-medium'>Password</label>
                    <input 
                        required 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full mb-6 p-3 border rounded-lg' 
                        type='password' 
                        placeholder='password' 
                    />
                    
                    <button className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition' type='submit'>Login</button>
                </form>
                
                <p className='text-center mt-4'>Don't have an account? <Link to='/register' className='text-blue-600'>Create one</Link></p>
            </div>
            
        </div>
    );
};

export default UserLogin;

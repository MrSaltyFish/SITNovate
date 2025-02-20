import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) =>{
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        setEmail('');
        setPassword('');
    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
             <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <h3 className='text-lg font-medium mb-2'> What's your email? </h3>
                <input 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#fee2e2] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email" 
                placeholder='email@example.com'/>
                <h3 className='text-lg font-medium mb-2'> Enter password </h3>
                <input 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-[#fee2e2] mb-10 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password"
                placeholder='password' 
                />
                <button className='bg-[#a8a29e] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base' type='submit'>Login</button>
            </form>
            <p className='text-center'> Don't have an account? 
                <Link to='/register' className='text-blue-600'> Create one </Link>
                </p>
             </div>
             <div>
                <Link to='/captain-login' className='bg-[#0284c7] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base' type='submit'> Sign in as Captain </Link>
                
             </div>
        </div>
    );
};

export default UserLogin;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext.jsx'; // Correct import

const UserRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const { user, setUser } = React.useContext(UserContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        };

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

        if (response.status === 201) {
            const data = response.data;
            setUser(data.user);
            navigate('/home');
        }

        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    };

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='mr-9 mb-7' src="https://www.freepnglogos.com/uploads/wonder-woman-logo-21.png" alt="Logo" style={{ width: '80px' }} />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-base font-medium mb-2'> What's your name? </h3>
                    <div className='flex gap-2 mb-5'>
                        <input 
                            required 
                            className='bg-[#fee2e2] w-1/2 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                            type="text" 
                            placeholder='First name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required 
                            className='bg-[#fee2e2] w-1/2 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                            type="text" 
                            placeholder='Last name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <h3 className='text-base font-medium mb-2'> Enter your email </h3>
                    <input 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#fee2e2] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                        type="email" 
                        placeholder='email@example.com'
                    />
                    <h3 className='text-base font-medium mb-2'> Enter password </h3>
                    <input 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#fee2e2] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                        type="password"
                        placeholder='password'
                    />
                    <button className='bg-[#a8a29e] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm' type='submit'>Create account</button>
                </form>
                <p className='text-center'> Already have an account?
                    <Link to='/login' className='text-blue-600'> Login here </Link>
                </p>
            </div>
            <p className='text-[10px] leading-tight'> Privacy Policy
                We collect personal data to provide our services. Your data is secure and may be shared with necessary third parties. You can manage your data anytime.
                Contact: [WonderWomen@999.com]
            </p>
        </div>
    );
};

export default UserRegister;

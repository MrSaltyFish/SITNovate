import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div>
            <div className='bg-cover bg-bottom bg-[url(https://plus.unsplash.com/premium_photo-1736827704336-a125ab582ae4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
                <img className='mt-2 ml-6' src="https://www.freepnglogos.com/uploads/wonder-woman-logo-21.png" alt="Logo" style={{ width: '80px' }} />
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-3xl font-bold'> Ride with WonderWoman </h2>
                    <Link to='/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    );
};

export default Start;
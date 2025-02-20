import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div className='bg-cover bg-bottom bg-[url(bg.jpg)] h-screen flex flex-col justify-between w-full bg-red-400'>
            <div className='flex-grow'></div> 
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold text-center'>Surf the web with SentimentShark</h2>
                <Link to='/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    );
};

export default Start;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Home from './pages/Home';


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/login' element={<UserLogin />} />
                <Route path='/register' element={<UserRegister />} />
                <Route path = '/home' element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
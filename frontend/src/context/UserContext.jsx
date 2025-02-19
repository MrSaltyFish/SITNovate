import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserDataContext = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserDataContext;
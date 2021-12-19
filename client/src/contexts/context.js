import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

function UserProvider({ children }) {
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        userID: "",
        is_loggedin: false,
        cart: null,
    });

    return (
        <UserContext.Provider value={userDetails}>
            <UserDispatchContext.Provider value={setUserDetails}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

export { UserProvider, UserContext, UserDispatchContext };
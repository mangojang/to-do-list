import { createContext, useState } from "react";

export const UserContext = createContext({
    loggedIn: false,
    setLoggedIn: () => {}
});

const UserProvider = ({children})=>{
    const setLoggedIn = (data) => {
        setState(prev => (
            {
                ...prev, 
                loggedIn: data
            }
        ))
    }

    const initialState = {
        loggedIn: false,
        setLoggedIn
    }

    const [state, setState] = useState(initialState);
    
    return(
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
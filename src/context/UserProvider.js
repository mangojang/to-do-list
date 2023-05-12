import { createContext, useMemo, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props)=>{
    const [user, setUser] = useState({
        loggedIn: false,
    });

    const value = useMemo(()=>{
        function setLoggedIn (data){
            setUser(prev => (
                {
                    ...prev, 
                    loggedIn: data
                }
            ))
        }
        return {...user, setLoggedIn}
    },[user])
    
    return(
        <UserContext.Provider value={value} {...props} />
    )
}

export default UserProvider;
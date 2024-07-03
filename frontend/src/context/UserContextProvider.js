import {useState} from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({ photoURL: '', displayName: '' });    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    ) 
    
}

export default UserContextProvider;
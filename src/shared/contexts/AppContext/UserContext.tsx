import {createContext, SetStateAction, Dispatch, ReactNode, useState} from "react";
import {User} from "../../types/User.ts";

export interface UserContextType {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<UserContextType>({
    user: {id: 0, name: "", lastActive: ""},
    setUser: () => {}
});

type UserProviderProps = {
    children: ReactNode
}

const UserProvider = ({children}: UserProviderProps) => {
    const [user, setUser] = useState<User>({id: 0, name: "", lastActive: ""});

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

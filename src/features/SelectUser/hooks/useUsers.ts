import { useState, useEffect } from "react";
import {UserItem} from "../types/UserItem.ts";

const useUsers = () => {
    const [users, setUsers] = useState<UserItem[]>([]);

    useEffect(() => {
        // fetch users from the server
        setUsers([ {id: 1, name: "John Doe", lastActive: "2021-09-01"} ]);
    }, []);

    return users;
};

export default useUsers;

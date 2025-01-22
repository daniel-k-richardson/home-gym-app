import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import useUsers from "../../hooks/useUsers.ts";
import {UserContext} from "../../../../shared/contexts/AppContext/UserContext.tsx";
import {User} from "../../../../shared/types/User.ts";
import UserItem from "./components/UserItem.tsx";

const UserList = () => {
    const users  = useUsers();
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const { setUser } = userContext;
    const handleClick = (user: User): void => {
        setUser({id: user.id, name: user.name, lastActive: user.lastActive});
        navigate("/dashboard");
    };

    return (
        <>
            <div>
                <h2>User list</h2>
                { users.length > 0 ? (
                <ul>
                    {users.map((user: User) => (
                        <UserItem key={user.id} user={user} handleClick={handleClick}/>
                    ))}
                </ul>
                ) : (
                     <p>There are no users.</p>
                )}
            </div>
        </>
    );
};

export default UserList;

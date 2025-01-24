import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import useUsers from "../../hooks/useUsers.ts";
import {UserContext} from "../../../../shared/contexts/AppContext/UserContext.tsx";
import {User} from "../../../../shared/types/User.ts";
import UserItem from "./components/UserItem.tsx";
import styled from "styled-components";


const StyledUserListContainer = styled.div`
    border: 1px solid black;
    padding: 0.1rem;
    border-radius: 0.5rem;
`;

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
            <StyledUserListContainer>
                <p>User list</p>
                { users.length > 0 ? (
                <div>
                    {users.map((user: User) => (
                        <UserItem key={user.id} user={user} handleClick={handleClick}/>
                    ))}
                </div>
                ) : (
                     <p>There are no users.</p>
                )}
            </StyledUserListContainer>
        </>
    );
};

export default UserList;

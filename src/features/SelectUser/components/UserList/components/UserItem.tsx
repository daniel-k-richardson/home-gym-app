import {User} from "../../../../../shared/types/User.ts";
import styled from "styled-components";

interface UserItemProps {
    user: User,
    handleClick: (user: User) => void;
}

const StyledUserItem = styled.p`
    cursor: pointer;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    
    &:hover {
        background-color: #333;
        color: #fff;
    }
`;

const UserItem = ({user, handleClick} : UserItemProps) => {

    return (
        <StyledUserItem onClick={() => handleClick(user)} >{user.name}</StyledUserItem>
    )
}

export default UserItem;

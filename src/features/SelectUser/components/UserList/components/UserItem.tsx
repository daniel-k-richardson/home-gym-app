import {User} from "../../../../../shared/types/User.ts";

interface UserItemProps {
    user: User,
    handleClick: (user: User) => void;
}

const UserItem = ({user, handleClick} : UserItemProps) => {

    return (
        <li onClick={() => handleClick(user)} >{user.name}</li>
    )
}

export default UserItem;

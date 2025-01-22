import { UserContext } from "../../../contexts/AppContext/UserContext.tsx";
import { useContext } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
        display: flex;
        justify-content: space-between;
        height: 5rem;
        background-color: #333;
        color: #fff;
        padding: 1rem;
    `;

const StyledSwitchUserButton = styled.button`
        color: #fff;
        background-color: #333;
        border: 1px solid #fff;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        height: 2rem;
    `;

const Header = () => {


    const userContext  = useContext(UserContext);
    const { user, setUser } = userContext;

    const handleSwitchUser = () => {
       setUser({id: 0, name: "", lastActive: ""});
    };

    return (
        <StyledHeader>
            <h1>TheBox</h1>
            { user.id !== 0 && <StyledSwitchUserButton onClick={handleSwitchUser}>Switch user</StyledSwitchUserButton> }
        </StyledHeader>
    );
};

export default Header;

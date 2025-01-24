import UserList from "../components/UserList/UserList.tsx";
import CreateButton from "../../../shared/components/buttons/CreateButton.tsx";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled(CreateButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    height: 2rem;
    &:hover {
        background-color: black;
        color: white;
    }
`;

const SelectUserPage = () => {

    const handleClick = () => {
      console.log("Create a new user button clicked.");
    };

    return (
        <StyledContainer>
            <p>Select a user</p>
            <UserList/>
            <StyledButton text={"Create a new user"} handleClick={handleClick} />
        </StyledContainer>
    )
}

export default SelectUserPage;

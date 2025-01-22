import UserList from "../components/UserList/UserList.tsx";
import CreateButton from "../../../shared/components/buttons/CreateButton.tsx";
import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled(CreateButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
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

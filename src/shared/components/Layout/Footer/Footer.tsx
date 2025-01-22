import styled from "styled-components";


const StyledFooter = styled.footer`
        flex-grow: 0;
        background-color: #333;
        color: #fff;
        padding: 1rem;
        text-align: center;
    `;
const Footer = () => {

    return (
        <StyledFooter>
            <p>Footer</p>
        </StyledFooter>
    );
}

export default Footer;

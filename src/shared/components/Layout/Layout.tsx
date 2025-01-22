import Header from "./Header/Header.tsx";
import Footer from "./Footer/Footer.tsx";
import {Outlet} from "react-router-dom";
import { GlobalStyle } from "../styles/GlobalStyle.tsx";
import styled from "styled-components";


const StyledContext = styled.div`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    `;

const StyledMain = styled.main`
        flex-grow: 1;
    `;

const Layout = () => {


  return (
      <>
          <GlobalStyle />
          <StyledContext>
              <Header />
              <StyledMain>
                  <Outlet />
              </StyledMain>
              <Footer />
          </StyledContext>
      </>
  );
}

export default Layout;

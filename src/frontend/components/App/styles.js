import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    
    font-family: "Roboto Mono", monospace;
  }
  
  #root {
    width: 100vw;
    height: 100vh;
  }
`

const Div = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 7% 1fr;
  grid-template-rows: 50px 1fr 5%;
  grid-template-areas: 
          "header header"
          "menu content"
          "footer footer";
  
  &.menu-close {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 5%;
    grid-template-areas: 
          "header"
          "content"
          "footer";
    
    & > menu {
      display: none;
    }
  }

  @media(max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 5%;
    grid-template-areas: 
          "header"
          "content"
          "footer";
    
    .menu-toggle {
      display: flex;
    }
    
    & > menu {
      display: none;
    }
    
    &.menu-close {
      grid-template-areas: 
          "header"
          "menu"
          "footer";

      & > menu {
        display: flex;
      }
      
      & > main {
        display: none;
      }
      
    }
  }
  
`;


export { Div, GlobalStyle };
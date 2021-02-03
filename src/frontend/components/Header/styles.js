import styled from 'styled-components';

const StyledHeader = styled.header`
    grid-area: header;
    
    background-color: ${props => props.theme.headerBg};
  
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    & .react-logo {
      @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
      }
      
      animation: spin 2s infinite;
      
      font-size: 2rem;
      color: white;
      margin: 0px 10px 0px 7px;
    }
  
    & > h1 {
      color: white;
      font-weight: 400;
      font-size: 1.5rem;
    }
  
    & > * {
      margin-right: 10px;
    }
    
`;

export { StyledHeader };
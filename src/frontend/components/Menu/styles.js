import styled from 'styled-components';

const StyledMenu = styled.menu`
    grid-area: menu;
  
    background-color: ${props => props.theme.menuBg};
  
    display: flex;
    flex-direction: column;
`;

export { StyledMenu };
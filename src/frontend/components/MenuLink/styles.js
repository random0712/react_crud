import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${props => props.theme.menuFg};
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  
  & > a {
    color: inherit;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > a.active {
    background-color: ${props => props.theme.menuFg};
  }
  
  & svg {
    font-size: 2rem;
  }
  
;
`;

export { Div };
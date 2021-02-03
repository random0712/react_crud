import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  
  background-color: ${props => props.theme.footerBg};
`;

export { StyledFooter };
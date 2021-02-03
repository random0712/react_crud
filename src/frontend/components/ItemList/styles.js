import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  padding: 20px;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: left;

  @media(max-width: 670px) {
    flex-direction: column;
  }
`;


export { Ul };
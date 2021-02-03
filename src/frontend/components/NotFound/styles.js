import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  
  & > img {
    margin-top: 50PX;
    height: 350px;
  }
  
  & > h1 {
    margin-top: 20px;
  }
  
  & > a {
    text-decoration: none;
    color: blue;
  }
`;

export { Div };

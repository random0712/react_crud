import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: #28be36;
  outline: 0;
  
  margin-right: 10px;
  border: 3px solid #28be36;
  border-radius: 15%;
  height: 50px;
  width: 90px;

  font-weight: bold;
  color: #FFF;

  transition: 0.3s;

  &:hover {
    background-color: #28be36;
    color: #FFF;
  }
;

  ${props => props.primary && css`
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.52);
    border: 1px solid #0e4907;

    &:hover {
      background-color: #0f7714;
      color: #FFF;
    }
  ;
  `}

  ${props => props.secondary && css`
    border: 3px solid #595c59;
    color: #595c59;
    background-color: #ffffff;
    &:hover {
      background-color: #4b4f4b;
      color: #FFF;
    }
  ;
  `}
`;

export default Button ;
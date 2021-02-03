import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 20px;
  
    & > label {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      
      font-size: 1.5rem;
    }
  
    & > label > input, textarea {
      margin-bottom: 20px;
    }
  
    & > label > input {
       padding: 10px;
       flex-grow: 1;
       margin-right: 2%;
    }

   & > label > textarea {
      width: 50%;
      max-width: 50%;
      height: 100px;
      max-height: 100px;
      resize: none;
     @media(max-width: 576px) { 
       max-width: 98%;
       width: 98%;
   }
`;

export { StyledForm };
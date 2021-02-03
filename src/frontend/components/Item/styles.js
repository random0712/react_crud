import styled from 'styled-components';

const Li = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  min-width: 250px;
  max-width: 300px;
  height: 180px;
  padding-top: 20px;
  margin: 1%;
  border: 0.1px solid #969595;
  border-bottom: 5px solid ${props => props.theme.menuFg};
  border-radius: 2%;

  & > h1 {
    font-size: 1.6rem;
    margin: 2%;
  }

  & > h2 {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => props.theme.footerBg};
    border: 5px solid ${props => props.theme.footerBg};

    font-size: 2rem;
    color: ${props => props.theme.menuFg};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > h3 {
    color: #888888;
    font-size: 1rem;
    font-style: italic;
    font-weight: 500;
    margin-left: 2%;
    text-align: center;

    align-self: center;
  }

  & > i > .box {
    font-size: 2.5rem;
    margin-bottom: 10%;
    color: ${props => props.theme.menuFg};
  }

  & i {
    font-size: 1.3rem;
  }

  & > i > .trash {
    position: absolute;
    left: 15px;
    top: 15px;

    color: red;
    transition: 0.3s;


    &:hover {
      font-size: 1.5rem;
      color: #8f0404;
    }
  }

  .pen {
    position: absolute;
    left: 45px;
    top: 15px;
    color: #3737ec;

    transition: 0.3s;

    &:hover {
      font-size: 1.5rem;
      color: #07186a;
    }
  }
  @media(max-width: 670px) {
    max-width: 100%;
    flex-grow: 1;
  }

`;

export { Li };
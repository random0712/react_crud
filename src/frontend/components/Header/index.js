import React from 'react';
import { StyledHeader } from './styles';
import { FaReact } from "react-icons/fa";
import MenuToggle from "../MenuToggle";

const Header = ({ setTheme }) => {

    return (
        <StyledHeader>
            <FaReact className="react-logo"/>
            <h1>React CRUD</h1>
            <MenuToggle setTheme={setTheme} />
        </StyledHeader>
    );
};

export default Header;
import React from 'react';
import { StyledMenu } from './styles';
import { FaHome, FaClipboard } from 'react-icons/fa';

import MenuLink from "../MenuLink";

const Menu = () => {

    return (
        <StyledMenu>
            <MenuLink to="/">
                <FaHome />
            </MenuLink>
            <MenuLink to="/register">
                <FaClipboard />
            </MenuLink>
        </StyledMenu>
    );
};

export default Menu;
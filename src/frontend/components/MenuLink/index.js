import React from 'react';
import { Div } from './styles';
import { NavLink } from 'react-router-dom'

const MenuLink = ({to, children}) => {
    return (
        <Div>
            <NavLink to={to} exact>
                {children}
            </NavLink>
        </Div>
    );
}

export default MenuLink;
import React from 'react';
import { FaBars } from "react-icons/fa";
import {Button} from "./styles";


const MenuToggle = ({ setTheme }) => {

    return (
        <Button onClick={setTheme} className="menu-toggle" >
            <FaBars />
        </Button>
    )
}

export default MenuToggle;
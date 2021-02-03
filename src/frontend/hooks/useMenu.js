import { useState } from 'react';

const useMenu = () => {
    const [menu, setMenu] = useState("");

    function toggleMenu() {
        menu === "" ? setMenu("menu-close") : setMenu("");
    };

    return [menu, toggleMenu];
}

export default useMenu;
import React from 'react';
import { Div } from './styles';

import { NavLink } from "react-router-dom";
import Logo from '../../assets/not_found.svg'

const NotFound = () => {

    return (
        <Div>
            <img alt="Not Found" src={Logo}/>
            <h1>Pagina não encontrada</h1>
            <NavLink to="/">Quer voltar para a pagina principal? Então clique aqui!</NavLink>
        </Div>
    )
}

export default NotFound;
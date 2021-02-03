import React from 'react';
import { Li } from './styles';
import { FaBox, FaTrashAlt, FaPen } from "react-icons/fa";
import { useHistory, NavLink } from 'react-router-dom';

import api from "../../api/axios";

const Item = ({ id, name, amount, description }) => {
    const history = useHistory();
    function deleteItem(id) {
        api.delete('/', {
            data: {
                _id: id
            }
        })
            .then(res => history.go(0))
            .catch(console.error)
    }

    return (
        <Li>
            <i onClick={() => deleteItem(id)}>
                <FaTrashAlt className="trash" />
            </i>
            <NavLink to={`/item/${id}`}>
                <i>
                    <FaPen className="pen" />
                </i>
            </NavLink>
            <h2>{amount}</h2>
            <i>
                <FaBox className="box"/>
            </i>
            <h1>{name}</h1>
            <h3>"{description}"</h3>
        </Li>
    );
}

export default Item;
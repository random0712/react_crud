import React from 'react';
import { Ul } from './styles';
import Item from "../Item";

import useFetch from "../../hooks/useFetch";

function createItems(item) {
    return <Item key={item._id} id={item._id} name={item.name} amount={item.amount} description={item.description} />
}

const ItemList = () => {
    const [response, loading, _] = useFetch('/', "get");
    const items = response.map(item => createItems(item));

    return (
        <Ul>
            {
                loading ? <p>Loading...</p> : items
            }
        </Ul>
    )
};

export default ItemList;
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import {ButtonsArea} from "../Content/styles";
import Button from "../Button";
import Form from "../Form";

import api from "../../api/axios";

function handleChange(event, prop, item, setItem) {
    const newItem = { ...item };
    newItem[prop] = event.target.value;
    setItem(newItem);
}

function clearInputs(event) {
    const form = event.target.form;

    // Getting Inputs Data
    form.querySelectorAll("input").forEach(input => {
        input.value = '';
    })
    // Getting Textarea data
    form.querySelectorAll("textarea").forEach(textarea => {
        textarea.value = '';
    })
}

const EditForm = () => {
    const history = useHistory();

    const { id } = useParams()
    const [item, setItem] = useState({
        _id: '',
        name: '',
        amount: 0,
        description: ''
    })

    useEffect(() => {
        api.get(`/item?_id=${id}`)
            .then(res => res.data.status === 404 ? history.push("/not_found") : setItem(res.data))
            .catch(console.error);

    }, [])

    return (
        <Form method="post" url="/">
            <input style={{display: "none"}} id="_id" value={item._id} readOnly/>
            <label htmlFor="name">
                Nome:
                <input type="text" id="name" value={item.name} onChange={event => handleChange(event, "name", item, setItem)}/>
            </label>
            <label htmlFor="amount">
                Quantidade:
                <input type="number" id="amount" value={item.amount} onChange={event => handleChange(event, "amount", item, setItem)}/>
            </label>
            <label htmlFor="description">
                Descrição:
                <textarea  id="description" maxLength={100} value={item.description} onChange={event => handleChange(event, "description", item, setItem)}/>
            </label>
            <ButtonsArea>
                <Button type="submit" primary>Salvar</Button>
                <Button type="button" secondary onClick={clearInputs}>Cancelar</Button>
            </ButtonsArea>
        </Form>
    )
}

export default EditForm;
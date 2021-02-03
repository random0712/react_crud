import React from 'react';
import { StyledForm } from './styles';
import { useHistory } from 'react-router-dom'

import api from "../../api/axios";

function submit(e, method, url, history) {
    e.preventDefault();
    const params = {}
    // Getting input data
    e.target.querySelectorAll("input").forEach(input => {
        const inputData = { [input.id]: input.value };
        Object.assign(params, inputData);

        input.value = '';
    })
    // Getting Textarea data
    e.target.querySelectorAll("textarea").forEach(textarea => {
        const textAreaData = { [textarea.id]: textarea.value };
        Object.assign(params, textAreaData);

        textarea.value = '';
    })

    api[method](url, params)
        .then(res => res.data)
        .catch(console.error)

    history.push("/")
}

const Form = ({ children, method, url }) => {
    const history = useHistory();

    return (
        <StyledForm onSubmit={(e) => submit(e, method, url, history)}>
            {children}
        </StyledForm>
    );
};

export default Form;
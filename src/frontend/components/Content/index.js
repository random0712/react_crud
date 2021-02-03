import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, ButtonsArea } from './styles';

import ItemList from "../ItemList";
import Form from "../Form";
import Button from "../Button";
import EditForm from "../EditForm";
import NotFound from "../NotFound";

const Content = () => {

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

    return (
        <Main>
            <Switch>
                <Route path="/register">
                    <Form method="post" url="/">
                        <label htmlFor="name">
                            Nome:
                            <input type="text" id="name" required />
                        </label>
                        <label htmlFor="amount">
                            Quantidade:
                            <input type="number" id="amount" min="1" required/>
                        </label>
                        <label htmlFor="description">
                            Descrição:
                            <textarea  id="description" maxLength={100} required/>
                        </label>
                        <ButtonsArea>
                            <Button type="submit" primary>Salvar</Button>
                            <Button type="button" secondary onClick={clearInputs}>Cancelar</Button>
                        </ButtonsArea>
                    </Form>
                </Route>
                <Route path="/" exact>
                    <ItemList />
                </Route>
                <Route path="/item/:id">
                    <EditForm />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Main>
    );
}

export default Content;
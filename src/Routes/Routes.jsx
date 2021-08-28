import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Todo } from '../Components/Todo';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/'>
                <Todo />
            </Route>
        </Switch>
    )
}

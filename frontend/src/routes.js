import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Books from './pages/Books'
import ListBooks from './pages/ListBooks'

function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Books}/>
            <Route path='/listalivro' component={ListBooks} />
        </Switch>
    )
}

export default Routes;

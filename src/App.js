import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoIndex from './components/TodoIndex.jsx';
import TodoCreate from './components/TodoCreate.jsx';
import TodoEdit from './components/TodoEdit.jsx';
import TodoDelete from './components/TodoDelete.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={TodoIndex} exact />
            <Route path="/Todo/Index" component={TodoIndex} exact />
            <Route path="/Todo/Create" component={TodoCreate} exact />
            <Route path="/Todo/Edit/:id" component={TodoEdit} exact />
            <Route path="/Todo/Delete/:id" component={TodoDelete} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
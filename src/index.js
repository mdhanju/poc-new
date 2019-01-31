import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
// import serviceWorker from './registerServiceWorker'
import App from './App'
import store, { history } from './store'
import './styles/app.scss'
import LogIn from './containers/LogIn';
import Search from './containers/Search';
import SearchResults from './containers/SearchResults';

import Create from './containers/Create';
import routes from './routes'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import {  Switch } from 'react-router'




ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <Switch>
      <Route exact path="/" component={LogIn} />
      <Route exact path="/search" component={withRouter(Search)} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/view" component={Search} />
    </Switch>
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
)

// serviceWorker.unregister()

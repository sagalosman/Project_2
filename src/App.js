import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import Home from './components/Home'
import Photos from './components/Photos'

const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/photos" component={Photos} />
    </Switch>
  </BrowserRouter>
}

export default App
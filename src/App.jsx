import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/home/Home'
import Payment from './screens/payment/Payment'
import Finalization from './screens/finalization/Finalization'
import Cart from './screens/cart/Cart'

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/carrinho">
          <Cart />
        </Route>
        <Route exact path="/pagamento">
          <Payment />
        </Route>
        <Route exact path="/finalizacao">
          <Finalization />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import { Home, Products, SingleProducts, About, Cart, Error, Checkout, Private } from './pages'

function App() {
  return (  
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
      <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/products/:id' children={<SingleProducts />}>
          <SingleProducts/>
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/private'>
          <Private />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
    )
}

export default App
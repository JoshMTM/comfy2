import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-sas.eu.auth0.com
// 0NdY1khtMKl1w6QLO2xdM8xGlQ55OxGa

ReactDOM.render(
    <Auth0Provider
    domain="dev-sas.eu.auth0.com"
    clientId="p2se8ZWbMlpubo5Tuacmvfd2AbO058eW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserProvider>
    <ProductsProvider>
        <FilterProvider>
            <CartProvider>
            <App />
            </CartProvider>
        </FilterProvider>
    </ProductsProvider>
    </UserProvider>
    </Auth0Provider>,
document.getElementById('root'))

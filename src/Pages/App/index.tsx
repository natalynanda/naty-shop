import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../../App.css'
import Home from '../Home'
import Account from '../Account'
import Order from '../Order'
import Orders from '../Orders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/clothes',
      element: <Home />
    },
    {
      path: '/electronics',
      element: <Home />
    },
    {
      path: '/furnitures',
      element: <Home />
    },
    {
      path: '/toys',
      element: <Home />
    },
    {
      path: '/others',
      element: <Home />
    },
    {
      path: '/my-account',
      element: <Account />
    },
    {
      path: '/my-order',
      element: <Order />
    },
    {
      path: '/my-orders',
      element: <Orders />
    },
    {
      path: 'sign-in',
      element: <SignIn  />
    },
    {
      path: '/*',
      element: <NotFound />
    },
    {
      path: '/my-orders/last',
      element: <Order />
    },
    { path: '/my-orders/:id', 
      element: <Order /> 
    },

  ])
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

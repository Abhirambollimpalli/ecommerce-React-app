
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ROUTER/Home'
import Cart from './ROUTER/Cart'
import Product from './ROUTER/Product'
import Login from './Login'
import Men from './ROUTER/Men'
import Women from './ROUTER/Women'
import Child from './ROUTER/Child'
import Nav from './NAV Component/Nav'
import { CartProvider } from './ROUTER/CartContext'
import Signup from './ROUTER/Signup'
import './App.css';

let router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      { path: '/home', element: <Home></Home>},
      { path: '/signin', element: <Signup></Signup> },
      { path: '/login', element: <Login></Login> },
      { path: '/cart', element:<Cart></Cart>},
      {
        path: '/product',
        element: <Product />,
        children: [
          { path: '/product/women', element: <Women></Women>},
          { path: '/product/men', element: <Men></Men> },
          { path: '/product/child', element: <Child></Child> }
        ]
      }
    ]
  }
]);

const App = () => {
  return (
    <CartProvider>
        <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;

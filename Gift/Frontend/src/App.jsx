import { useState } from 'react'
import './App.css'
import 'rsuite/dist/rsuite.min.css';
import Home from './Pages/home'; // Import the Home component
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './Pages/login';
import SignUps from './Pages/register';
import ProductDetails from './Pages/proddet';
import Cart from './Pages/Cart';
import Toys from './Pages/toys';
import Books from './Pages/books';
import Chocolates from './Pages/chocolates';
import DataTable from './Admin/admin_pro';
import Dashboard from './Admin/dashboard/Dashboard';
import Adminproducts from './Admin/data/Adminproducts';
import Address from './Pages/address';

function App() {
  const [count, setCount] = useState(0)
  const route=createBrowserRouter([
      {
        path:'/',
        element:<SignUps/>
      },
      {
        path:'/login',
        element:<SignIn/>
      },
      {
        path:'/register',
        element:<SignUps/>
      },
      {
        path:'/proddet/:_id',
        element:<ProductDetails/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/toys',
        element:<Toys/>
      },
      {
        path:'/books',
        element:<Books/>
      },
      {
        path:'/chocolates',
        element:<Chocolates/>
      },
      {
        path:'/admin_pro',
        element:<DataTable/>
      },
      {
        path:'/AdminDash',
        element:<Adminproducts/>
      },
      {
        path:'/address',
        element:<Address/>
      }
  ])
  
  return (
    <>
      {/* Render Home component here */}
      <Home />
      <div className="content">
        {/* Render content here */}
        <RouterProvider router={route}/>
      </div>
    </>
  )
}

export default App

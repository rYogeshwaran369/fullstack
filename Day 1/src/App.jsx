import { useState } from 'react'
import './App.css'
import 'rsuite/dist/rsuite.min.css';
import Banner from './Components/Slider'
import Navbars from './Components/Navbar'
import Slideshow from './Components/Slider';
import TopBar from './Components/topbar';
import Sale from './Components/sale';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import Product from './Components/Products/Product';
import newArrFour from "./assets/images/products/newArrival/newArrFour.webp";
import YearProduct from './Components/YearProduct';
import SignIn from './Pages/login';
import SignUp from './Pages/register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/home';
import ProductDetails from './Pages/proddet';
import Cart from './Pages/Cart';
import Toys from './Pages/toys';
import Books from './Pages/books';
import Chocolates from './Pages/chocolates';
import DataTable from './Admin/admin_pro';
import Dashboard from './Admin/dashboard/Dashboard';
import Adminproducts from './Admin/data/Adminproducts';
// import ProductDetails from './Pages/productdet';
function App() {
  const [count, setCount] = useState(0)
  const route=createBrowserRouter([
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<SignIn/>
      },
      {
        path:'/register',
        element:<SignUp/>
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
      }
  ])
  return (
    <>
    <RouterProvider router={route}/>
    {/* <ProductDetails/> */}
    </>
  )
}

export default App

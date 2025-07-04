
import {createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
// import Layout from './components/Layout/Layout';
// import Home from './components/Home/Home';
import Shop from './Components/Shop/Shop';
// import MeatsSeafood from './Components/MeatsSeaFood/MeatsSeaFood';
import Bakery from './Components/Bakery/Bakery';
import Beverages from './Components/Beverages/Beverages';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Register from './Components/Register/Register';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import HomeOne from './Components/HomeOne/HomeOne';
import HomeTwo from './Components/HomeTwo/HomeTwo';
import HomeThree from './Components/HomeThree/HomeThree';
import HomeFor from './Components/HomeFor/HomeFor';
import AboutUs from './Components/AboutUs/AboutUs';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import MeatsSeaFood from './Components/MeatsSeaFood/MeatsSeaFood';
import CartPage from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import ThankYou from './Components/Checkout/ThankYou';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  // const [count, setCount] = useState(0)

let router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Login/> },
      { path: "home", element: <Home/> },
      { path: "Homeone", element: <HomeOne /> },
      { path: "HomeTwo", element: <HomeTwo /> },
      { path: "HomeThree", element: <HomeThree /> },
      { path: "HomeFor", element: <HomeFor /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "Shop", element: <Shop /> },
      { path: "MeatsSeafood", element: <MeatsSeaFood /> },
      { path: "Bakery", element: <Bakery /> },
      { path: "Beverages", element: <Beverages /> },
      { path: "Blog", element: <Blog /> },
      { path: "Contact", element: <Contact /> },
      { path: "Login", element: <Login /> },
      { path: "cart", element: <CartPage /> },
      { path: "Checkout", element: <Checkout />},
      { path: "Thank-you", element: <ThankYou />},
      { path: "Register", element: <Register /> },
      { path: "*", element: <NotFoundPage /> },
      { path: "profile", element: <Profile /> },
    ],
  },
])

  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
      <RouterProvider router={router}/> 
    </>
  )
}

export default App

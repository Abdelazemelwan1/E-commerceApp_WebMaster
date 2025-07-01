
import {createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
// import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import MeatsSeafood from './components/MeatsSeafood/MeatsSeafood';
import Bakery from './components/Bakery/Bakery';
import Beverages from './components/Beverages/Beverages';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import HomeOne from './components/HomeOne/HomeOne';
import HomeTwo from './components/HomeTwo/HomeTwo';
import HomeThree from './components/HomeThree/HomeThree';
import HomeFor from './components/HomeFor/HomeFor';
import AboutUs from './components/AboutUs/AboutUs';
import Layout from './components/Layout/Layout';

function App() {
  // const [count, setCount] = useState(0)

let router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "Homeone", element: <HomeOne /> },
      { path: "HomeTwo", element: <HomeTwo /> },
      { path: "HomeThree", element: <HomeThree /> },
      { path: "HomeFor", element: <HomeFor /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "Shop", element: <Shop /> },
      { path: "MeatsSeafood", element: <MeatsSeafood /> },
      { path: "Bakery", element: <Bakery /> },
      { path: "Beverages", element: <Beverages /> },
      { path: "Blog", element: <Blog /> },
      { path: "Contact", element: <Contact /> },
      { path: "Login", element: <Login /> },
      { path: "Register", element: <Register /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App

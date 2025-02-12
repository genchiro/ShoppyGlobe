import './App.css'
import { Route,Routes } from 'react-router'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Shop from './Components/Shop/Shop'
import ProductDetails from './Components/Products/ProductDetails'
import Loading from './Components/UI/Loading'
import useGet from './utils/CustomHook'
import NotFound from './Components/NotFound/404NotFound.jsx'
import { ToastContainer } from 'react-toastify'
import Login from './Components/LoginAndRegister/Login.jsx'
function App() {
  useGet();
  return (
    <>
    <Routes>
    <Route path='/' element = {<Home/>}/>
    <Route path='/Cart' element = {<Cart/>}/>
    <Route path='/Shop' element = {<Shop/>}/>
    <Route path='/Details/:id' element = {<ProductDetails/>}/>
    <Route path='/Loading' element = {<Loading/>}/>
    <Route path='/Login' element = {<Login/>}/>
    <Route path='/*' element = {<NotFound/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App

import './App.css'
import { Route,Routes } from 'react-router'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Shop from './Components/Shop'
import ProductDetails from './Components/ProductDetails'
import Loading from './Components/Loading'
import useGet from './utils/CustomHook'
import NotFound from './Components/404NotFound'
import { ToastContainer } from 'react-toastify'
import Error from './Components/Error'
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
    <Route path='/*' element = {<NotFound/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App

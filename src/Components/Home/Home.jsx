import NavBar from "../Header/NavBar.jsx";//Importing Components 
import { Suspense, lazy } from 'react';//Importing functions from react
const Slide = lazy(() => import("../UI/Slide.jsx"));//Lazy loading a component in the below two lines
const AdditionalInfo = lazy(() => import("../Additionalnfo/AdditonalInfo.jsx"));
const ProductList = lazy(() => import("../Products/ProductList.jsx"));
const Footer = lazy(() => import("../Footer/Footer.jsx"));
import { useDispatch,useSelector} from "react-redux";//Importing Hooks
import Loading from "../UI/Loading.jsx"//Importing Components
import { useEffect } from "react";//Importing Hooks
import Error from "../UI/Error.jsx";//Importing Components
import { ChangeCategory, Searching } from "../../utils/Store.js";
function Home(){//Home Function to return the HomePage
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.GetData);
    const Errors = useSelector((state) => state.Error);
    useEffect(() =>{
        dispatch(ChangeCategory("All"))
        dispatch(Searching(""));
    },[dispatch])//Dispatching some functions after the components have mounted
         if(Errors){//Checking for errors
            return(<Error/>)
         }
        if(Data.length === 0){//Checking if the Data has been fetched or not
        return(<Loading/>)}
            return(<>
            <NavBar/>
            <Suspense fallback = {<Loading/>}>
            <Slide/>
            <AdditionalInfo/>
            <ProductList text = {"Big Discount"} colors = {"rgb(246, 249, 252)"}/>
            <ProductList text = {"New Arrivals"} colors = {"rgb(255,255,255)"}/>
            <ProductList text = {"Best Sales"} colors = {"rgb(246, 249, 252)"}/>
            <Footer/>
            </Suspense></>)
            }
export default Home;
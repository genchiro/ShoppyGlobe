import NavBar from "./NavBar";
import Slide from "./Slide";
import AdditionalInfo from "./AdditonalInfo";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { useDispatch,useSelector} from "react-redux";
import Loading from "./Loading"
import { useEffect } from "react";
import Error from "./Error";
function Home(){
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.GetData);
    const Errors = useSelector((state) => state.Error);
    useEffect(() =>{
        dispatch({type:"ChangeCategory",payload:"All"})
        dispatch({type:"Searching",payload:""});
    },[dispatch])
         if(Errors){
            return(<Error/>)
         }
        if(Data.length === 0){
        return(<Loading/>)}
            return(<>
            <NavBar/>
            <Slide/>
            <AdditionalInfo/>
            <ProductList text = {"Big Discount"} colors = {"rgb(246, 249, 252)"}/>
            <ProductList text = {"New Arrivals"} colors = {"rgb(255,255,255)"}/>
            <ProductList text = {"Best Sales"} colors = {"rgb(246, 249, 252)"}/>
            <Footer/></>)
            }
export default Home;
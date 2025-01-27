import { useEffect, useMemo, useState } from "react";//Importing Hooks from react
import Footer from "../Footer/Footer";//Below Two lines are used to import different Components 
import NavBar from "../Header/NavBar";
import { useSelector } from "react-redux";//Importing useSelector Hook from react-redux
import Error from "../UI/Error";//Importing Error component from UI
import "./Cart.css"//Importing Styling for this
import { Suspense } from "react";//Importing Suspense from react
import Loading from "../UI/Loading";//Importing Loading Screen
import { lazy } from "react";//Importing lazy from react
const CartItems = lazy(() => import("./CartItems"));
function Cart(){//Cart Function which will return the Cart
    const[Price,setPrice] = useState(0.00);
    const Cart = useSelector((state) => state.CartData);
    const Errors = useSelector((state) => state.Error); 
    function TotalPrice(Cart){
    let Total = 0;
    Cart.forEach(element => {
    let num1 = element.Price;
    let num2 = element.count;
    num1 = num1.replaceAll("$","");
    const num3 = parseFloat(num1);
    const num4 = parseFloat(num2);
    const num5 = num3 * num4;
    Total += num5;
        });
    return Total
    }
    const num3 = useMemo(() => TotalPrice(Cart),[Cart]);
    useEffect(() =>{
    setPrice(num3);
    },[Cart])
    if(Errors){//Checking Errors
    return<Error/>
    }
    return(<>
    <NavBar/>
    <div id="Cart_Container">
    <div id="Cart_Items"><Suspense fallback = {<Loading/>}><CartItems/></Suspense></div>{/*Using suspense to Increase optimizations*/}
    <div id="Cart_Price_Container">
    <div id="Cart_Summary">Cart Summary</div>
    <div id="Total_Price">Total Price:</div>
    <div id="Cart_Price">$ {Price}</div>
    </div>
    </div>
    <Footer/>
    </>)
}
export default Cart;
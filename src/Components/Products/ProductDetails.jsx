import NavBar from "../Header/NavBar";//Importing Components
import ProductItems from "./ProductItems";//Importing Components
import Footer from "../Footer/Footer";//Importing Components
import { useParams } from "react-router";//Importing Hooks
import { useDispatch, useSelector } from "react-redux";//Importing Hooks
import { Add, changereview } from "../../utils/Store";
import Loading from "../UI/Loading";
import { useMemo, useRef} from "react";//Importing Hooks
import HandleClicks from "../../utils/HandleClicks";
import Rating from "../UI/Rating";//Importing Components
import "./Products.css";
import { toast } from "react-toastify";
function ProductDetails(){//Product Details Page returning function
    const {id} = useParams();
    const dispatch = useDispatch();
    let Id = useMemo(() => parseInt(id,10),[id]);//Parsing the String to int
    const Data = useSelector((state) => state.GetData);
    const Input = useRef(1);
    const Errors = useSelector((state) => state.Error);
    const Review = useSelector((state) => state.ReviewSelected);
    if(Errors){//Checking for Errors
        return(<Error/>)
     }
    if(Data.length !== 0){//Checking the Data
    function AddingToCart(){
    let Value = Math.max(1,Input.current);
    const Objects = {Details:Data[Id].Name,Price:"$" + Data[Id].Price,Thumbnail:Data[Id].Thumbnail,Inputs:Value}
    toast("Item has been added to your cart")
    dispatch(Add(Objects));
    }
    return(<>
    <NavBar/>
    <div className="Overlay_Background">
    <div className="Overlay">{Data[Id].Name}</div>
    </div>
    <div className="Product_Detail">
    <img src={Data[Id].Thumbnail} alt="" />
    <div className="Product_Other_Details">
    <h2 id="Item_Name">{Data[Id].Name}</h2>
    <div id="Rating_Container"><div id="Star_Rating"><Rating Payload = {Data[Id].Rating}/></div>
    <div id="Numerical_Rating">{Data[Id].Rating} Ratings</div></div>
    <div id="Price_Category_Container"><h2 id="Price_Item">${Data[Id].Price}</h2> <div id="Product_Category">Category:{Data[Id].Category}</div></div>
    <p id="Product_Description">{Data[Id].Description}</p>
    <input type="number" name="" id="Total_Input" defaultValue="1" min="1" onChange={(e) => Input.current = e.target.value}/>
    <button id="Adding_to_Carts" onClick={AddingToCart}>Add to Cart</button>
    </div>
    </div>
    <div id="Description_Rating_Container">
    <div id="Description_Rating"><button id="Descriptions" style={{color:Review[1]}} onClick={() => dispatch(changereview([false,"black","rgb(156,155,155)"]))}>Decription</button><button id="Reviews" style={{color:Review[2]}} onClick={() => dispatch(changereview([true,"rgb(156,155,155)","black"]))}>Review</button></div>
    <div id="Product_Complete_Description">
    <HandleClicks Data = {Data} id = {Id}/>
    </div>
    </div>
    <h1 id="Products_Like">You might Also Like</h1>
    <ProductItems/>
    <Footer/>
    </>)
    }
    else{
    return(<Loading/>)
    }
}
export default ProductDetails;//Exporting function
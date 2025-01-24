import NavBar from "./NavBar";
import Star from "../assets/Star.svg";
import ProductItems from "./ProductItems";
import Footer from "./Footer";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../utils/Store";
import Loading from "./Loading";
import { useMemo, useRef} from "react";
import HandleClick from "../utils/HandleClick";
import Rating from "./Rating";
function ProductDetails(){
    const {id} = useParams();
    const dispatch = useDispatch();
    let Id = useMemo(() => parseInt(id,10),[id]);
    const Data = useSelector((state) => state.GetData);
    const Input = useRef(1);
    const Errors = useSelector((state) => state.Error);
    if(Errors){
        return(<Error/>)
     }
    if(Data.length !== 0){
    function AddingToCart(){
    let Value = Math.max(1,Input.current);
    const Objects = {Details:Data[Id].Name,Price:"$" + Data[Id].Price,Thumbnail:Data[Id].Thumbnail,Inputs:Value}
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
    <button id="Adding_to_Cart" onClick={AddingToCart}>Add to Cart</button>
    </div>
    </div>
    <div id="Description_Rating_Container">
    <div id="Description_Rating"><button id="Descriptions" onClick={(e) => HandleClick(Data,Id,e)}>Decription</button><button id="Reviews" onClick={(e) => HandleClick(Data,Id,e)}>Review</button></div>
    <div id="Product_Complete_Description">
    {Data[Id].Description}
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
export default ProductDetails;
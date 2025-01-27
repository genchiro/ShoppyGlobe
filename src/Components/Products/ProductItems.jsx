import { useDispatch, useSelector } from "react-redux";//Importing hooks
import { useNavigate } from "react-router";//Importing hooks
import { Add } from "../../utils/Store";//Importing Actions
import { useMemo } from "react";//Importing hooks
import {toast} from 'react-toastify';
import Rating from "../UI/Rating";//Importing Component
function ProductItems(){//Returning the ProductItems with this function
    let num5;
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.GetData);
    const Search = useSelector((state) => state.Search);
    const navigate = useNavigate();
    function CartUpdating(e){//Function to update Cart
    e.stopPropagation();
    toast("Item has been added to your cart")
    const Parent = e.target.closest(".Product_Items");
    const Details = Parent.querySelectorAll(".Product_Details");
    const Price = Parent.querySelectorAll(".Product_Price");
    const ID = parseInt(Parent.id,10);
    const Thumbnail = Data[ID - 1].Thumbnail;
    const Object = {Details:Details[0].textContent,Price:Price[0].textContent,Thumbnail:Thumbnail,Inputs:1}
    dispatch(Add(Object));
    }
    function HandleClick(e){
    const ID = e.target.closest(".Product_Items").id;
    navigate(`/Details/${ID}`);
    }
    const num10 = useMemo(() => (Search) ? Data.filter((elem) => elem.Name.includes(Search)):Data,[Search,Data])
    num5 = useMemo(() =>{//Generating random Data so that random data is generated every time
        const Max = num10.length;
        const Min = (Max > 6) ? Max - 6:0;
        const Random = (Max > 6) ?Math.floor(Math.random() * Min):0;    
        return (!Search ) ? num10.slice(Random,Random + 6):num10},[num10])
    return(
        <div id="Product_Items_Container">
        {num5.map((elem) =>{
        return(<div className="Product_Items" id={elem.Index} key={elem.Id} onClick={HandleClick}>
            <div className="Product_Discount">{Math.ceil(elem.Discount)}% Off</div>
            <img src={elem.Thumbnail} loading="lazy" alt="" className="Product_Image"/>
            <div className="Product_Details">{elem.Name}</div>
            <div className="Product_Rating"><Rating Payload = {elem.Rating}/></div>
            <div className="Product_Other_Container"><div className="Product_Price">${Math.floor(elem.Price)}</div> <button className="Adding_To_Cart" onClick={CartUpdating}>+</button></div>
            </div>)
        })}
    </div>)
}
export default ProductItems;//Exporting default function
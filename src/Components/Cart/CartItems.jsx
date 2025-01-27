import { useDispatch, useSelector } from "react-redux";//Importing Hooks from react-redux
import Cross from "../../assets/Cross.svg"//Importing Cross image 
import { Delete, Increase, Subtract } from "../../utils/Store";//Importing actions from Store.js
function CartItems(){//CartItems function which will return cart Items
    const Data = useSelector((state) => state.CartData);
    const dispatch = useDispatch();
    function HandleAnything(e){
    const Parent = e.target.closest(".Products_in_Cart");
    const Id = parseInt(Parent.id,10);
    if(e.target.className === "Remove"){
    dispatch(Delete(Id));
    }
    else if(e.target.className === "Adding"){
    dispatch(Increase(Id));
    }
    else{
    dispatch(Subtract(Id));
    }
    }
    return(<>
      {Data.map((elem,index) =>{
      if(elem){
        return(<div className="Products_in_Cart" id={index} key={index}>
            <img src={elem.Thumbnail} alt="" />
            <div className="Items_Details">
            <h1>{elem.Details}</h1>
            <div className="Items_Prices">
            <h3 className="Items_Quantity">{elem.Price} * {elem.count}</h3>
            <h3 className="Items_Total_Price">{elem.Price}</h3></div>
            </div>
            <div className="Items_Buttons">
            <button className="Remove" onClick={HandleAnything}><img src={Cross} alt="" className="Remove"/></button>
            <div className="Other_Button_Container">
            <button className="Adding" onClick={HandleAnything}>+</button>
            <button className="Removing" onClick={HandleAnything}>-</button></div>
            </div>
            </div>)
      }
      else{
        return null;
      }
      })}
    </>)
}
export default CartItems;
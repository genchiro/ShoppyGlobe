import Mart from "../assets/Mart.svg"
import Cart from "../assets/Cart.svg"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { memo } from "react";
function NavBar(){
    const CartData = useSelector((state) => state.CartData);
    return(<>
    <nav>
    <div id="Company_Name"><img src={Mart} alt="" />ShoppyGlobe</div>
    <div id="Nav_Buttons_Container">
    <button className="Navigation_Buttons"><Link to={"/"} className="Navigation_Links">Home</Link></button><button className="Navigation_Buttons"><Link to={"/Shop"} className="Navigation_Links">Shop</Link></button><button className="Navigation_Buttons"><Link to={"/Cart"} className="Navigation_Links">Cart</Link></button><button className="Navigation_Buttons" id="Cart_Icon"><img src={Cart} alt="" /><div id="Items_Count">{CartData.length}</div></button>
    </div>
    </nav>
    </>);
}
export default memo(NavBar);
import Mart from "../assets/Mart.svg"
import Cart from "../assets/Cart.svg"
import MenuIcon from "../assets/Menu.svg"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { memo } from "react";
import Menu from "../utils/Menu";
function NavBar(){
    const CartData = useSelector((state) => state.CartData);
    const navigate = useNavigate();
    return(<>
    <nav>
    <div id="Nav_Container">
    <div id="Company_Name"><img src={Mart} alt="" />ShoppyGlobe</div>
    <div id="Nav_Buttons_Container">
    <button className="Navigation_Buttons"  id="Home_Link"><Link to={"/"} className="Navigation_Links">Home</Link></button><button className="Navigation_Buttons"><Link to={"/Shop"} className="Navigation_Links" id="Shop_Link">Shop</Link></button><button className="Navigation_Buttons" id = "Cart_Link"><Link to={"/Cart"} className="Navigation_Links">Cart</Link></button><button className="Navigation_Buttons" id="Cart_Icon" onClick={() => navigate("/Cart")}><img src={Cart} alt="" /><div id="Items_Count">{CartData.length}</div></button><button className="Navigation_Buttons" onClick={Menu} id="Hamburger_Icon"><img src={MenuIcon} alt="" /></button>
    </div>
    </div>
    <div id="Hidden_Nav"><button className="Hidden_Buttons"><Link to={"/"} className="Navigation_Links">Home</Link></button><button className="Hidden_Buttons"><Link to={"/Shop"} className="Navigation_Links">Shop</Link></button><button className="Hidden_Buttons"><Link to={"/Cart"} className="Navigation_Links">Cart</Link></button></div>
    </nav>
    </>);
}
export default memo(NavBar);
import Mart from "../../assets/Mart.svg"//Importing Mart image
import Cart from "../../assets/Cart.svg"//Importing Cart image
import MenuIcon from "../../assets/Menu.svg"//Importing Menu image
import { useDispatch, useSelector } from "react-redux";//Importing Hooks
import { Link, useNavigate } from "react-router-dom"
import { memo } from "react";
import "./Header.css";//Importing Style
import { DisplayMenu } from "../../utils/Store";
function NavBar(){//NavBar Function to display NavBar
    const CartData = useSelector((state) => state.CartData);
    const Display = useSelector((state) => state.Menu);
    const navigate = useNavigate();//Navigation Hook to navigate to different pages
    const dispatch = useDispatch();
    return(<>
    <nav>
    <div id="Nav_Container">{/*Real Nav Bar*/}
    <div id="Company_Name"><img src={Mart} alt="" />ShoppyGlobe</div>
    <div id="Nav_Buttons_Container">
    <button className="Navigation_Buttons"  id="Home_Link"><Link to={"/"} className="Navigation_Links">Home</Link></button><button className="Navigation_Buttons"><Link to={"/Shop"} className="Navigation_Links" id="Shop_Link">Shop</Link></button><button className="Navigation_Buttons" id = "Cart_Link"><Link to={"/Cart"} className="Navigation_Links">Cart</Link></button><button className="Navigation_Buttons" id="Cart_Icon" onClick={() => navigate("/Cart")}><img src={Cart} alt="" /><div id="Items_Count">{CartData.length}</div></button><button className="Navigation_Buttons" onClick={() =>dispatch(DisplayMenu())} id="Hamburger_Icon"><img src={Display[1]} alt="" /></button>
    </div>
    </div>{/*Hidden Nav Bar*/}
    <div id="Hidden_Nav" style={{display:Display[0]}}><button className="Hidden_Buttons"><Link to={"/"} className="Navigation_Links">Home</Link></button><button className="Hidden_Buttons"><Link to={"/Shop"} className="Navigation_Links">Shop</Link></button><button className="Hidden_Buttons"><Link to={"/Cart"} className="Navigation_Links">Cart</Link></button></div>
    </nav>
    </>);
}
export default memo(NavBar);
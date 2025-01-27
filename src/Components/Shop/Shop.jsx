import NavBar from "../Header/NavBar.jsx";//Importing Components
import Footer from "../Footer/Footer";//Importing Components
import Down from "../../assets/Down.svg"//Importing Components
import Search from "../../assets/Search.svg"//Importing Components
import ProductList from "../Products/ProductList";//Importing Components
import { useDispatch, useSelector } from "react-redux";//Importing Hooks
import { ChangeCategory, Searching ,ChangeDisplay} from "../../utils/Store";//Importing Functions from Store
import Loading from "../UI/Loading";//Importing Components
import "./Shop.css"
function Shop(){//Shop Function to return Shop Page
    const dispatch = useDispatch();
    const Errors = useSelector((state) => state.Error);
    if(Errors){
        return(<Error/>)
     }
    const Data = useSelector((state) => state.GetData);
    const Display = useSelector((state) => state.Display);
    function HandleSearch(e){
    const Search = e.target.value;
    dispatch(Searching(Search));
    }
    function HandleClick(e){//Handling Click on categories
    dispatch(ChangeCategory(e.target.textContent));
    dispatch(ChangeDisplay())
    }
    const Category = useSelector((state) => state.Category);
    if(Data.length === 0) return <Loading/>
    return(<>
    <NavBar/>
    <div className="Overlay_Background">
    <div className="Overlay">Product</div>
    </div>
    <div id="Filter_Search_Container">
    <div id="Filter_Container" onClick={() => dispatch(ChangeDisplay())}><div id="Filter">{Category}</div> <span id="Border"></span> <img src={Down} alt="" id="Down"/></div>
    <div id="Search_Container"><input type="text" id="Search" placeholder="Search..." onChange={HandleSearch}/> <img src={Search} alt="" id="Search_Icon"/></div>
    </div>
    <div id="Categories_Container">
    <ul id="List_of_Category" style={{display:Display}}>
    <li className="Categories" onClick={HandleClick}>Furniture</li>
    <li className="Categories" onClick={HandleClick}>SmartPhones</li>
    <li className="Categories" onClick={HandleClick}>Laptops</li>
    <li className="Categories" onClick={HandleClick}>Beauty</li>
    <li className="Categories" onClick={HandleClick}>Groceries</li>
    <li className="Categories" onClick={HandleClick}>All</li></ul>
    </div>
    <ProductList/>
    <Footer/></>)
}
export default Shop;//Exporting Shop function as default
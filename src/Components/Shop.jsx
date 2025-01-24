import NavBar from "./NavBar";
import Footer from "./Footer";
import Down from "../assets/Down.svg"
import Search from "../assets/Search.svg"
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import Display from "../utils/Display";
import { ChangeCategory, Searching } from "../utils/Store";
import Loading from "./Loading";
function Shop(){
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.GetData);
    const Errors = useSelector((state) => state.Error);
    function HandleSearch(e){
    const Search = e.target.value;
    dispatch(Searching(Search));
    }
    function HandleClick(e){
    dispatch(ChangeCategory(e.target.textContent));
    e.target.parentElement.style.display = "none";
    }
    const Category = useSelector((state) => state.Category);
    if(Errors){
        return(<Error/>)
     }
    if(Data.length === 0) return <Loading/>
    return(<>
    <NavBar/>
    <div className="Overlay_Background">
    <div className="Overlay">Product</div>
    </div>
    <div id="Filter_Search_Container">
    <div id="Filter_Container" onClick={Display}><div id="Filter">{Category}</div> <span id="Border"></span> <img src={Down} alt="" id="Down"/></div>
    <div id="Search_Container"><input type="text" id="Search" placeholder="Search..." onChange={HandleSearch}/> <img src={Search} alt="" id="Search_Icon"/></div>
    </div>
    <div id="Categories_Container">
    <ul id="List_of_Category">
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
export default Shop;
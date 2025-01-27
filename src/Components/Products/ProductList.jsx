import ProductItems from "./ProductItems";//Importing the ProductItems Component
import "./Products.css";
import PropTypes from "prop-types";
function ProductList({colors = "#fff",text = ""}){//Using props
    return(<div id = "ProductList" style={{backgroundColor:colors}}>
        <h1>{text}</h1>
        <ProductItems/>
    </div>)
}
ProductList.propTypes = {//Declaring the type of props that ProductList can take
colors:PropTypes.string,
text:PropTypes.string
}
export default ProductList;
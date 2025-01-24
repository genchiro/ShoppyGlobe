import ProductItems from "./ProductItems";
function ProductList(props){
    return(<div id = "ProductList" style={{backgroundColor:props.colors}}>
        <h1>{props.text}</h1>
        <ProductItems/>
    </div>)
}
ProductList.defaultProps = {
colors:"#fff",
text:""
}
export default ProductList;
import Star from "../../assets/Star.svg";//Importing Images
import StarEmpty from "../../assets/StarEmpty.svg";//Importing Images
import "./UI.css";//Importing Styles
import PropTypes from "prop-types"
function Rating(props){//Using Props
const Stars = Math.ceil(parseInt(props.Payload,10));
const Data = ["","","","",""];
return(<>
{Data.map((_,index) =>{
if(index < Stars){
return (<img src={Star} alt="" className="Rating_Star" key={index}/>)
}
else{
return(<img src={StarEmpty} alt="" className="Rating_Star" key={index}/>)
}
})}</>)
}
export default Rating
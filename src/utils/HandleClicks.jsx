import { useSelector } from "react-redux";
function HandleClicks(props){
    const review = useSelector((state) => state.ReviewSelected)
    if(review[0]){
    return(<>
    <p>{props.Data[props.id].Review[0].reviewerName}</p>
    <p style={{color:"#ffcd4e"}}>{props.Data[props.id].Review[0].rating}</p>
    <p>{props.Data[props.id].Review[0].comment}</p></>)
    }
    else{
    return(<>
    <p>{props.Data[props.id].Description}</p></>)
    }
}
export default HandleClicks;
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Updating } from "./Store";
function useGet(){
    const dispatch = useDispatch();
    const Category = useSelector((state) => state.Category);
    let URL = (Category === "All") ? `https://dummyjson.com/products`:`https://dummyjson.com/products/category/${Category}`
    useEffect(() =>{
    const Data  = async () =>{
        try {
        const num1 = await fetch(URL);
        if(!num1.ok){
        throw new Error("Error");
        }
        else{
        const num2 = await num1.json();
        const num3 = num2.products.map((elem) =>{
            const Object = {
                Id:elem.id,
                Name:elem.title,
                Description:elem.description,
                Rating:elem.rating,
                Discount:elem.discountPercentage,
                Price:Math.ceil(elem.price),
                Category:elem.category,
                Thumbnail:elem.thumbnail,
                Review:elem.reviews
            }
            return Object;
        })
        dispatch(Updating(num3));
        }
        } catch (error) {
        return error;
        }
    }
    Data();
    },[Category])
}
export default useGet;
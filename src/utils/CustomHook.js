import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Updating } from "./Store";
import { Error } from "./Store";
function useGet(){//Custom Hook for fetching Data
    const dispatch = useDispatch();
    const Category = useSelector((state) => state.Category);
    let URL = (Category === "All") ? `https://dummyjson.com/products`:`https://dummyjson.com/products/category/${Category}`//Data is fetched in two methods first is for all of the Data and second is based upon Category
    useEffect(() =>{//I have used useEffect to run the hook after the Components have mounted
    const Data  = async () =>{
        try {
        const num1 = await fetch(URL);
        if(!num1.ok){
        throw new Error("Error");
        }
        else{
        const num2 = await num1.json();
        const num3 = num2.products.map((elem,index) =>{
            const Object = {
                Id:elem.id,
                Name:elem.title,
                Description:elem.description,
                Rating:elem.rating,
                Discount:elem.discountPercentage,
                Price:Math.ceil(elem.price),
                Category:elem.category,
                Thumbnail:elem.thumbnail,
                Review:elem.reviews,
                Index:index
            }
            return Object;
        })
        dispatch(Error(false));//If the Error is not caught then the Error is set to false
        dispatch(Updating(num3));//The Object is created and being stored in the store
        }
        } catch (error) {
        dispatch(Error(true));//If the Error is caught then the Error is set to true and an error screen will popup
        }
    }
    Data();
    },[Category])//The Data will only be fetched if the Category changes
}
export default useGet;
import { useMemo } from "react";
import OtherData from "../utils/OtherData"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Slide(){
    const SlideItems = useMemo(() =>{
        return OtherData.map((elem,index) =>{
            return(
            <div className="Slide_Container" key={index}>
            <div className="Slide_Data">
            <h1>{elem.H1}</h1>
            <p>{elem.P}</p>
            </div>
            <img src={elem.SRC} alt="" className="Slide_Image"/>
            </div>
            )
            })
    },[])
    return(<>
    <div className="carousel">
    <AliceCarousel autoPlay infinite autoPlayInterval={3000} disableDotsControls disableButtonsControls>
    {SlideItems}
    </AliceCarousel>
    </div>
    </>)
}
export default Slide;
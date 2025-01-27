import { useMemo } from "react";//Importing a hook
import OtherData from "../../utils/OtherData"//Importing Components
import AliceCarousel from 'react-alice-carousel';//Importing a carousel for SlideShow
import 'react-alice-carousel/lib/alice-carousel.css';
import "./UI.css"//Importing Styles
function Slide(){
    const SlideItems = useMemo(() =>{
        return OtherData.map((elem,index) =>{//Mapping out every slide
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
    <div className="carousel">{/*Running the slide show*/}
    <AliceCarousel autoPlay infinite autoPlayInterval={3000} disableDotsControls disableButtonsControls>
    {SlideItems}
    </AliceCarousel>
    </div>
    </>)
}
export default Slide;
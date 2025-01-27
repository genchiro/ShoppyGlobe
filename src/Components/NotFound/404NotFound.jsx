import { useNavigate } from "react-router";//Importing Hooks
import Footer from "../Footer/Footer";//Importing Components in both of these lines
import NavBar from "../Header/NavBar";
import "./NotFound.css"//Importing Styles
function NotFound(){//Function for not found page
    const navigate = useNavigate();//Using Hooks
    return(<>
    <NavBar/>
    <div id = "NotFound_Container">
    <div id="NotFound"><h1>404 Not Found</h1></div>
    <button id="NotFound_Button" onClick={() => navigate("/")}>Back to Home</button>
    </div>
    <Footer/>
    </>)
}
export default NotFound;
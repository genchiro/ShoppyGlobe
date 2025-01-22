import { useNavigate } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";
function NotFound(){
    const navigate = useNavigate();
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
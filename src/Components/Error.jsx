import { useNavigate } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";
function Error(){
    const navigate = useNavigate();
    return(<>
    <NavBar/>
    <div id = "Error_Container">
    Error Fetching The Data try Again later
    </div>
    <Footer/>
    </>)
}
export default Error;
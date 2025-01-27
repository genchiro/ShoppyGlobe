import Footer from "../Footer/Footer";//Importing Components
import NavBar from "../Header/NavBar";//Importing Components
import "./UI.css"//Importing Styling
function Error(){//Returning a error page
    return(<>
    <NavBar/>
    <div id = "Error_Container">
    Error Fetching The Data try Again later
    </div>
    <Footer/>
    </>)
}
export default Error;
import { useState } from "react";
import NavBar from "../Header/NavBar"
import "./LoginAndRegister.css"
import { Link } from "react-router";
function Login(){
const [Visibility,setVisibility] = useState(["visible","hidden"]);
const [position,setposition] = useState("2rem");
const [height,setheight] = useState("20rem");
function HandleClick(e){
const num1 = e.target.closest("div").id;
if(num1 === "Login"){
setVisibility(["visible","hidden"]);
setposition("2rem");
setheight("20rem");
}
else{
setVisibility(["hidden","visible"]);
setposition("-35rem");
setheight("35rem");
}
}
return(
<>
<NavBar/>
<div id="Login_Container">
<div className="LoginForm" style={{maxHeight:height}}>
<div className="Login_Interior" id="Login_Form" style={{visibility:Visibility[0]}}>
<h2>Login</h2>
<input type="text" className="LoginInputs" placeholder="email address" />
<input type="password" className="LoginInputs" placeholder="password"/>
<button className = "LoginButton">Login</button>
<div className="Register" id="NewUser">Not Registered ? <Link onClick={HandleClick}>Create an Account</Link></div>
</div>
<div className="Login_Interior" id="Register_Form" style={{visibility:Visibility[1],left:position}}>
<h2>Register</h2>
<input type="text" className="LoginInputs" placeholder="Name"/>
<input type="text" className="LoginInputs" placeholder="email address"/>
<input type="password" className="LoginInputs" placeholder="password"/>
<input type="password" className="LoginInputs" placeholder="confirm password"/>
<button className = "LoginButton">Register</button>
<div className="Register" id="Login">Already Registered ? <Link onClick={HandleClick}>Sign in</Link></div>
</div>
</div>
</div>
</>
)
}
export default Login;
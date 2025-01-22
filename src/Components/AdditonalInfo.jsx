import Shipping from "../assets/Shipping.svg"
import Payment from "../assets/Payment.svg"
import Secure from "../assets/Secure.svg"
import Guarentee from "../assets/Guarentee.svg"
function AdditionalInfo(){
    return(<>
    <div id="AdditionalInfo">
        <div className="Additional_Data"><img src={Shipping} alt="" />
        <h3>Free Shipping</h3>
        <p>Lorem ipsum dolor sit amet.</p></div>
        <div className="Additional_Data" style={{backgroundColor:"rgb(206, 235, 233)"}}><img src={Payment} alt="" />
        <h3>Free Shipping</h3>
        <p>Lorem ipsum dolor sit amet.</p></div>
        <div className="Additional_Data" style={{backgroundColor:"rgb(226, 242, 178)"}}><img src={Secure} alt="" />
        <h3>Free Shipping</h3>
        <p>Lorem ipsum dolor sit amet.</p></div>
        <div className="Additional_Data" style={{backgroundColor:"rgb(214, 229, 251)"}}><img src={Guarentee} alt="" />
        <h3>Free Shipping</h3>
        <p>Lorem ipsum dolor sit amet.</p></div>
    </div>
    </>)
}
export default AdditionalInfo;
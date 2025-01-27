import Shipping from "../../assets/Shipping.svg"//Below four lines is used to import Images
import Payment from "../../assets/Payment.svg"
import Secure from "../../assets/Secure.svg"
import Guarentee from "../../assets/Guarentee.svg"
import "./AdditionalInfo.css" //Styles has been imported
function AdditionalInfo(){//This function will return Four Cards with Different Data written on them
    return(<>
    <div id="AdditionalInfo"><div className="Additional_Data">
  <img src={Shipping} alt="" />
  <h3>Free Shipping</h3>
  <p>Free shipping on all orders.</p>
</div>
<div className="Additional_Data" style={{backgroundColor:"rgb(206, 235, 233)"}}>
  <img src={Payment} alt="" />
  <h3>Safe Payment</h3>
  <p>Secure payment methods available.</p>
</div>
<div className="Additional_Data" style={{backgroundColor:"rgb(226, 242, 178)"}}>
  <img src={Secure} alt="" />
  <h3>Secure Payment</h3>
  <p>Your payment is fully protected.</p>
</div>
<div className="Additional_Data" style={{backgroundColor:"rgb(214, 229, 251)"}}>
  <img src={Guarentee} alt="" />
  <h3>Back Guarantee</h3>
  <p>Money-back guarantee</p>
</div>
    </div>
    </>)
}
export default AdditionalInfo;//The Function has been Imported
import "./Footer.css"//Importing Style for Footer
function Footer(){//Footer function
    return(<div id="Footer_container"><footer>
     <div id="footer_p1">
      <h1>ShoppyGlobe</h1>
      <p>ShoppyGlobe offers a seamless shopping experience with a wide range of high-quality products, fast shipping, and secure payment options. Shop confidently with our dedicated customer support and enjoy exclusive deals.</p>
     </div>
     <div id="footer_p2">
    <h1>About Us</h1>
    <div className="AboutUs_Links">Carrers</div>
    <div className="AboutUs_Links">Our Stories</div>
    <div className="AboutUs_Links">Our Cares</div>
    <div className="AboutUs_Links">Terms & Conditions</div>
    <div className="AboutUs_Links">Privacy Policy</div>
     </div>
     <div id="footer_p3">
    <h1>Customer Care</h1>
    <div className="CustomerCare_Links">Help Center</div>
    <div className="CustomerCare_Links">How to Buy</div>
    <div className="CustomerCare_Links">Track Your Order</div>
    <div className="CustomerCare_Links">Corporate & Bulk <br /> Purchasing</div>
    <div className="CustomerCare_Links">Return and Refunds</div>
     </div>
     <div id="footer_p4">
    <h1>Contact Us</h1>
    <div className="Contact_Links">70 Washington Square South, New York,<br /> NY 10012, United States</div>
    <div className="Contact_Links">Email: uilib.help@gmail.com</div>
    <div className="Contact_Links">Phone: +1 1123 456 78</div>
     </div>
    </footer></div>)
}
export default Footer;
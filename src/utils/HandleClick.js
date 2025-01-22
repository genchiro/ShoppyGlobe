function HandleClick(e){
    const ReviewData = document.getElementById("Product_Reviews");
    const Review = document.getElementById("Reviews");
    const Description = document.getElementById("Descriptions");
    if(e.target.id === "Reviews"){
    ReviewData.style.zIndex = 2;
    Description.style.color = "rgb(156,155,155)";
    Review.style.color = "black";
    }
    else{
    ReviewData.style.zIndex = -1;
    Review.style.color = "rgb(156,155,155)";
    Description.style.color = "black";
    }
    }
export default HandleClick;
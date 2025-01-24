function HandleClick(Data,Id,e){
    const num1 = document.getElementById("Product_Complete_Description");
    const Description = document.getElementById("Descriptions");
    const Review = document.getElementById("Reviews");
    if(e.target.id === "Reviews"){
    Description.style.color = "rgb(156,155,155)";
    Review.style.color = "black";
    num1.innerHTML = "";
    const p1 = document.createElement("p");
    p1.innerText = `${Data[Id].Review[0].reviewerName}`
    const p2 = document.createElement("p");
    p2.style.color = "#ffcd4e";
    p2.innerText = `${Data[Id].Review[0].rating}`
    const p3 = document.createElement("p");
    p3.innerText = `${Data[Id].Review[0].comment}`
    num1.append(p1,p2,p3);
    }
    else{
    Description.style.color = "black";
    Review.style.color = "rgb(156,155,155)";
    num1.innerHTML = "";
    num1.append(`${Data[Id].Description}`);
    }
    }
export default HandleClick;
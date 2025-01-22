function Display(){
const List = document.getElementById("List_of_Category");
console.log("Hi");
if(List.style.display === "none"){
    List.style.display = "block";
}
else{
    List.style.display = "none";
}
}
export default Display;
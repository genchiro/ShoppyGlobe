import {configureStore} from "@reduxjs/toolkit"
export function Add(Data){
    return({
        type:"Add",
        payload:Data
    })
}
export function Subtract(Data){
    return({
        type:"Subtract",
        payload:Data
    })
}
export function Increase(Data){
    return({
        type:"Increase",
        payload:Data
    })
}
export function Delete(Data){
    return({
        type:"Delete",
        payload:Data
    })
}
const Cart = (state = [],action) =>{
switch(action.type){
    case "Add":{
    let found = false;
    const num1 = state.map((elem) =>{
    if(elem.Details === action.payload.Details){
    found = true;
    return {...elem,count:elem.count + action.payload.Inputs};
    }
    else{
    return elem;
    }
    })
    if(!found){
    action.payload.count = action.payload.Inputs;
    return [...num1,action.payload];
    }
    return num1;
}
    case "Subtract":{
    const num2 = state.map((elem,index) => {
    if(index === action.payload){
    if(elem.count === 1){
    return null;
    }
    else{
    return {...elem,count:elem.count - 1};
    }
    }
    else{
    return elem;
    }
    }).filter((elem) => elem !== null);
    return num2;
}
    case "Increase":{
    const num2 = state.map((elem,index) =>{
    if(index === action.payload){
    const num3 = {...elem,count:elem.count + 1}
    return num3;
    }
    else{
    return elem;
    }
    })
    return num2;
    }
    case "Delete":{
    const num2 = state.filter((_,index) => index !== action.payload);
    return num2;
    }
    default:
    return state;
}
}
export function Updating(Data){
return{
type:"Updating",
payload:Data
}
}
const Data = (state = [],action) =>{
switch(action.type){
    case "Updating":{
        return action.payload;
    }
    default:
        return state;
}
}
export function Searching(Data){
    return({
        type:"Searching",
        payload:Data
    })
}
const Search = (state = "",action) =>{
switch(action.type){
    case "Searching":{
        return action.payload;
    }
    default:
        return state
}
}
export function ChangeCategory(Data){
    return({
        type:"ChangeCategory",
        payload:Data
    })
}
const Category = (state = "All",action) =>{
switch(action.type){
    case "ChangeCategory":{
        return action.payload;
    }
    default:
        return state
}
}
export function Error(Data){
return({
    type:"Error",
    payload:Data
})
}
const ErrorData = (state = false,action) =>{
switch(action.type){
    case "Error":
        return action.payload
    default:
        return state
}
}
const Store = configureStore({
    reducer:{
        CartData:Cart,
        GetData:Data,
        Search:Search,
        Category:Category,
        Error:ErrorData
    },
});
export default Store;
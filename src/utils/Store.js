import { configureStore, createSlice } from "@reduxjs/toolkit";
import Menus from "../assets/Menu.svg";
import Cross from "../assets/Cross.svg";
const Cart = createSlice({//Slices of Data has been created by this function
  name: "Cart",
  initialState: [],//Here the initial value is setup for the Data
  reducers: {
    Add: (state, action) => {//Functions to change the Value of the Data stored has been created in the reducers
      let found = false;
      state.forEach((elem) => {
        if (elem.Details === action.payload.Details) {
          found = true;
          elem.count += action.payload.Inputs;
        }
      });
      if (!found) {
        action.payload.count = action.payload.Inputs;
        state.push(action.payload);
      }
    },
    Subtract: (state, action) => {
      return state
        .map((elem, index) => {
          if (index === action.payload) {
            if (elem.count === 1) {
              return null;
            }
            return { ...elem, count: elem.count - 1 };
          }
          return elem;
        })
        .filter((elem) => elem !== null);
    },
    Increase: (state, action) => {
      return state.map((elem, index) => {
        if (index === action.payload) {
          return { ...elem, count: elem.count + 1 };
        }
        return elem;
      });
    },
    Delete: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});
const Menu = createSlice({
  name:"Menu",
  initialState:["none",Menus],
  reducers:{
    DisplayMenu:(state) =>{
      const num1 = [];
      num1.push((state[0] ==="none")?"flex":"none");
      num1.push((num1[0] === "none")?Menus:Cross)
      return num1;
    }
  }
})
const reviewselected = createSlice({
  name:"reviewselected",
  initialState:[false,"black","rgb(156,155,155)"],
  reducers:{
    changereview:(_,action) =>{
     return action.payload;
    }
  }
})
const Data = createSlice({
  name: "Data",
  initialState: [],
  reducers: {
    Updating: (state, action) => {
      return action.payload;
    },
  },
});
const Display = createSlice({
name:"Display",
initialState:"none",
reducers:{
  ChangeDisplay:(state) =>{
    return state === "none"?"block":"none";
  }
}
})
const Search = createSlice({
  name: "Search",
  initialState: "",
  reducers: {
    Searching: (state, action) => {
      return action.payload;
    },
  },
});

const Category = createSlice({
  name: "Category",
  initialState: "All",
  reducers: {
    ChangeCategory: (state, action) => {
      return action.payload;
    },
  },
});

const ErrorData = createSlice({
  name: "ErrorData",
  initialState:false,
  reducers: {
    Error: (state, action) => {
      return action.payload;
    },
  },
});
export const{DisplayMenu} = Menu.actions;
export const{changereview} = reviewselected.actions;
export const{ChangeDisplay} = Display.actions;
export const { Add, Subtract, Increase, Delete } = Cart.actions;//Actions have been exported for being used by other Components
export const { Updating } = Data.actions;
export const { Searching } = Search.actions;
export const { ChangeCategory } = Category.actions;
export const { Error } = ErrorData.actions;
const Store = configureStore({ //The Store have been created for the Use
  reducer: {
    Menu:Menu.reducer,
    ReviewSelected:reviewselected.reducer,
    Display:Display.reducer,
    CartData: Cart.reducer,
    GetData: Data.reducer,
    Search: Search.reducer,
    Category: Category.reducer,
    Error: ErrorData.reducer,
  },
});

export default Store;

import { configureStore } from "@reduxjs/toolkit";
import  recipeSlice  from "./features/userSlice";

export const store = configureStore({
   reducer:{
    recipeData: recipeSlice
   },
})

export default store
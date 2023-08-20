import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipe = createAsyncThunk('recipe', async (input)=>{
    
    const response = await  axios.get(` https://api.spoonacular.com/recipes/complexSearch?apiKey=c8ed2c2b1ae74e76af74c48ceebcee74&query=${input}`);
    return response.data.results;
})

export const fetchFullRecipe = createAsyncThunk('fullrecipe', async (id)=>{
    var str = id.toString();
    const response =   await axios.get(` https://api.spoonacular.com/recipes/informationBulk?apiKey=c8ed2c2b1ae74e76af74c48ceebcee74&ids=${str}`)
    return response.data[0];
})

export const fetchFavoriteData = createAsyncThunk('idData',async([data])=>{
    const ids = data.toString();
    const response = await axios.get( ` https://api.spoonacular.com/recipes/informationBulk?apiKey=c8ed2c2b1ae74e76af74c48ceebcee74&ids=${ids}`);
    console.log(response.data)
    return response.data
   
})
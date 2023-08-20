import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipe, fetchFullRecipe, fetchFavoriteData} from "./middleware";

// export const fetchRecipe = createAsyncThunk('data', async (input)=>{

//   const response = await  axios.get(` https://api.spoonacular.com/recipes/complexSearch?apiKey=c8ed2c2b1ae74e76af74c48ceebcee74&query=${input}`);
//   console.log(response);
//   return response.data.results;

// })

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipe: [],
    isLoading: false,
    fullrecipe:{recipe:[], isloading:false},
    similarrecipe:[],
    favoriterecipe:{recipe:[],isloading:false}
  },
  reducers: {},
  extraReducers: (builder) => {
    //FOR RECIPE STATE
    builder.addCase(fetchRecipe.pending, (state) => {
      // Handle PENDING fetch
      state.isLoading = true;
    });
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      // Handle successful fetch
      state.recipe = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchRecipe.rejected, (state, action) => {
      // Handle unsuccessful fetch
      state.error = action.error.message;
      state.isLoading = false;
    });


    // FOR FULLRECIPE STATE
    builder.addCase(fetchFullRecipe.pending, (state) => {
      // Handle PENDING fetch
      state.fullrecipe.isloading = true;
    });
    builder.addCase(fetchFullRecipe.fulfilled, (state,action) => {
      // Handle successful fetch
      state.fullrecipe.recipe = action.payload;
      state.fullrecipe.isloading = false
      // console.log(action.payload)
    });
    builder.addCase(fetchFullRecipe.rejected, (state, action) => {
      // Handle unsuccessful fetch
      state.error = action.error.message;
      state.fullrecipe.isloading = false;
    });


    // for FAVORITE RECIPE
    builder.addCase(fetchFavoriteData.pending, (state) => {
      // Handle PENDING fetch
      state.favoriterecipe.isloading = true;
    });
    builder.addCase(fetchFavoriteData.fulfilled, (state,action) => {
      // Handle successful fetch
      state.favoriterecipe.recipe = action.payload;
      console.log(action.payload);
      state.favoriterecipe.isloading = false
     
    });
    builder.addCase(fetchFavoriteData.rejected, (state, action) => {
      // Handle unsuccessful fetch
      state.error = action.error.message;
      state.favoriterecipe.isloading = false;
    });

  },
});

export default recipeSlice.reducer;

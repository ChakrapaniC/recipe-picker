
// import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Fullrecipe from './components/Fullrecipe';
import { Head } from './components/Head';
import Recipe from './components/Recipe';
import Favoriterecipe from './components/Favoriterecipe';
// import { useEffect } from 'react';
// import axios from 'axios';

function App() {
  // const getData = async () =>{
  //   await axios.get(`https://api.spoonacular.com/recipes/715538/similar?apiKey=c8ed2c2b1ae74e76af74c48ceebcee74`)
  //   .then((res)=>{
  //     console.log(res.data);
  //   }).catch((err)=>{
  //     console.log(err)
  //   })

   
  // }
  // useEffect(() => {
  //    getData();
  // }, [])
  
  return (
    <>
      <Head/>
      <Routes>
       <Route path='/' element={<Recipe/>}/> 
       <Route path='/fullrecipe' element={<Fullrecipe/>}/> 
       <Route path='/favorite' element={<Favoriterecipe/>} />
       </Routes>
    </>
  );
}

export default App;

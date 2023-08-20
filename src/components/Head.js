import React from 'react'
import '../CSS/Head.css';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { fetchRecipe } from '../features/middleware';
import { useEffect,useCallback } from 'react';


export const Head = () => {
  const [Input, setInput] = useState('paneer');
  const dispatch = useDispatch();
 
  const callFetchRecipe = useCallback((inp) => {
    const data = inp;
    dispatch(fetchRecipe(data));
  }, [dispatch]);

  useEffect(() => {
   callFetchRecipe(Input);
  }, [callFetchRecipe])
  
 


  
  return (
    <>
      <div className="container">
        <div className="nav-item">
            <div className="nav-text">
                <p className='title'>Recipe Picker</p>
                <p className='tag'>Find Meal For Your Ingredients</p>
            </div>
            <div className="input-box">
                <div className="input-search">
                    <input type="text" placeholder='Enter your ingredient' onChange={(e)=> {setInput(e.target.value)}} className='search-box'/>
                    <button className="search-btn"> <i class="fa-solid fa-magnifying-glass" onClick={()=> callFetchRecipe(Input)}></i></button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

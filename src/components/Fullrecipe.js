import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CSS/Fullrecipe.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

const Fullrecipe = () => {
  const [recipedata, setrecipedata] = useState([]);


  const data = useSelector((state) => state.recipeData.fullrecipe.recipe);
  const loading = useSelector((state) => state.recipeData.fullrecipe.isloading)

  useEffect(() => {
    if (data) {
      setrecipedata(data);
    }
  }, [data]);

 if(loading === true){
   return <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"150px"}}>
   <ScaleLoader color="red" /></div>
 }
  return (
    <>
      <div className="main-card">
        {
          // recipedata ? recipedata.map((item)=> (
          //     <div className="container1">
          //         <div className="left-card"><img src={item.image} alt="loading.." /></div>
          //         <div className="right-card">{item.instructions}</div>
          //     </div>
          // )):<div>loading....</div>
          recipedata ? (
            <div className="container1">
              <div className="left-card">
                <img src={recipedata.image} alt="loading.." />
              </div>
              <div className="right-card">
                <div className="content">
                  <div className="right-card-head">
                    <p className="p-1">{recipedata.title}</p>
                    <Link to="/">
                      <button className="back">back</button>
                    </Link>
                  </div>
                  <p className="p-2">{recipedata.instructions}</p>
                </div>
                {/* <div className="widgets">
                    <div className="property">
                      <p>vegetarian</p>
                      <p>gluton free</p>
                      <p>prep. time</p>
                      <p>very healthy</p>
                    </div>
                    <div className="value">
                      <p>
                        {recipedata.vegetarian.vegetarian}
                      </p>
                      <p>{toString((recipedata.glutenFree))}</p>
                      <p>{recipedata.readyInMinutes}</p>
                      <p>{recipedata.veryHealthy}</p>
                    </div>
                  </div> */}
                {/* {similarRecipe ? (
                  similarRecipe.map((item) => (
                    <div className="highlights">
                      <img src={item.sourceUrl} alt="loading.." />
                    </div>
                  ))
                ) : (
                  <div>loading...</div>
                )} */}
              </div>
            </div>
          ) : (
           <div> <ClimbingBoxLoader color="#36d7b7" /></div>
          )
        }
      </div>
    </>
  );
};

export default Fullrecipe;

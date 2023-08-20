import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";
import "../CSS/Favoriterecipe.css";

const Favoriterecipe = () => {
  const [favoriteRecipe, setfavoriteRecipe] = useState([]);

  const data = useSelector((state) => state.recipeData.favoriterecipe.recipe);
  const loading = useSelector((state) => state.recipeData.favoriterecipe.isloading);

  
  useEffect(() => {
    if (data) {
      setfavoriteRecipe(data);
    }
  }, [data]);

  if(loading){
    return <div style={{display:"flex",justifyContent:"center",marginTop:"150px"}}><SyncLoader color="orange" /></div>
  }

  return (
    <>
      <div className="container3">
        {favoriteRecipe
          ? favoriteRecipe.map((item) => (
              <div className="fav-card">
                <div className="fav-head">
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="info-widget">
                    <p
                      style={{
                        textAlign: "center",
                        padding: "5px 0px",
                        fontFamily: "sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ textAlign: "center" }}>{item.dishTypes}</p>
                    <div className="basic-info">
                      <div className="prep-time">
                        <i class="fa-solid fa-clock"></i>&nbsp;&nbsp;
                        <span>{item.readyInMinutes}min</span>
                      </div>
                      <div className="serv">
                        <i class="fa-sharp fa-light fa-plate-utensils"></i>
                        <span>{item.servings}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ingredients">
                    {
                        item.extendedIngredients.map((ele)=>(
                            <div>{ele.aisle}</div>
                        ))
                    }
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Favoriterecipe;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/Recipe.css";
import { GridLoader } from "react-spinners";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { fetchFavoriteData, fetchFullRecipe } from "../features/middleware";
import { Link } from "react-router-dom";

const Recipe = () => {
  const [getRecipe, setgetRecipe] = useState([]);
  const [Storevalue, setStorevalue] = useState(0);
  const [isloading, setisloading] = useState(false);
  const [LocalId, setLocalId] = useState([]);
 

  const data = useSelector((state) => state.recipeData);
  const loading = useSelector((state) => state.recipeData.isLoading)

  const dispatch = useDispatch();

  // DISPATCH FOR FULL RECIPE
  const callFetchFullRecipe = (id) => {
    console.log(id);
    dispatch(fetchFullRecipe(id));
  };

  // FOR ADD TO FAVORITE
  const addFavorite = (id) => {
    //If that value is null (meaning that we've never saved anything to that spot in localStorage before), use an empty array as our array. Otherwise, just stick with the value we've just parsed out.
    var retrieveData = JSON.parse(localStorage.getItem("id")) || [];
    //Here's the value we want to add
    var data = id;

    //If our parsed/empty array doesn't already have this value in it...
    if (retrieveData.indexOf(data) === -1) {
      //add the value to the array
      retrieveData.push(data);
      //and store it in localStorage as "ID"
      localStorage.setItem("id", JSON.stringify(retrieveData));
      setStorevalue(Storevalue + 1);
    }
 
  };

  const  favoriteData = () =>{
    let localStorageData =  JSON.parse(localStorage.getItem("id"));
    setLocalId(localStorageData)
    dispatch(fetchFavoriteData([localStorageData]));
  }

  useEffect(() => {
    setisloading(loading);
    if (data && data.recipe && Array.isArray(data.recipe)) {
      setgetRecipe(data.recipe);
    }
    //for favorite component
    // let localStorageData =  JSON.parse(localStorage.getItem("id"));
    // setLocalId(localStorageData)
    // dispatch(fetchFavoriteData([localStorageData]));
    favoriteData();

  }, [data.recipe,loading]);

  if (isloading === true) {
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:"150px"}}> <GridLoader color="blue" /></div>
  }

  return (
    <>
      <div className="heading">
        <p>Your Search Results</p>{" "}
        <div id="store">
          <div style={{display:(Storevalue === 0 ? 'none' : "block")}}><span style={{textAlign:"center",}}>{Storevalue}</span></div>
          <Link to='/favorite'><i class="fa-sharp fa-solid fa-shop" onClick={favoriteData}></i></Link>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // breakpoints={{

        //   // when window width is >= 992px
        //   992:{
        //     width:992,
        //     slidesPerView:3,
        //     spaceBetween:30
        //   },
        //    // when window width is >= 992px
        //    1200:{
        //     width:1200,
        //     slidesPerView:4,
        //     spaceBetween:50
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     width: 640,
        //     slidesPerView: 1,
        //     spaceBetween : 20,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     width: 768,
        //     slidesPerView: 2,
        //        spaceBetween:30
        //   },
        //  }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="card">
          {getRecipe ? (
            getRecipe.map((item) => (
              <SwiperSlide>
                <div className="recipe-cards" key={item.id}>
                  <div className="recipe-image">
                    <div className="fav-icon">
                      <i
                        class="fa-regular fa-heart"
                        onClick={() => {
                          addFavorite(item.id);
                        }}
                      ></i>
                    </div>
                    <img src={item.image} alt="loading" />
                  </div>
                  <div className="recipe-name">{item.title}</div>
                  <Link
                    to="/fullrecipe"
                    className="btn"
                    onClick={() => {
                      callFetchFullRecipe(item.id);
                    }}
                  >
                    <button>full recipe</button>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          ) : (
            null
          )}
        </div>
      </Swiper>
    </>
  );
};

export default Recipe;

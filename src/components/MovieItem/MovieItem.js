import React, { useEffect, useState } from "react";
import './MovieItem.css'

function MovieItem({movieTitle,movieID,movieType,movieIMG}) {
  return (
    <div className='itemContainer'>
        <img src={"https://image.tmdb.org/t/p/w185/"+movieIMG} className='itemImage'/>
        <span className='movieTitle'>{movieTitle}</span> 
        <span className='movieType'>
            {
                movieType[0] == 28 ? "Action" 
                : movieType[0]==12 ? "Adventure" 
                : movieType[0]==16 ? "Animation" 
                : movieType[0]==35 ? "Comedy" 
                : movieType[0]==80 ? "Crime" 
                : movieType[0]==18 ? "Drama" 
                : movieType[0]==10751 ? "Family" 
                : movieType[0]==14 ? "Fantasy" 
                : movieType[0]==36 ? "History"
                : movieType[0]==27 ? "Horror" 
                : movieType[0]==10402 ? "Music"
                : movieType[0]==9648 ? "Mystery"  
                : movieType[0]==10749 ? "Romance"  
                : movieType[0]==878 ? "Science Fiction"
                : movieType[0]==10770 ? "TV Movie"  
                : movieType[0]==53 ? "Thriller" 
                : movieType[0]==10752 ? "War" 
                : movieType[0]==37 ? "Western"
                :"None"
            }    
        </span>    
    </div>
  )
}

export default MovieItem
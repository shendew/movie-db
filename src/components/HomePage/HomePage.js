import React, { useEffect, useState } from "react";
import "./HomePage.css";
import NavBar from "../NavBar/NavBar";
import MovieItem from "../MovieItem/MovieItem";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
  }, []);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjMzYzZlN2Y4OWI1YzU0ZmY3ODFmNzEyZTYzZGY4MiIsInN1YiI6IjYwZjZkODQxYWY1OGNiMDA3NTAyYzZiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AKm7SRmdIxyV9BoYSCVf_jEmFu4u5-3Fb7EDdKghvKI",
    },
  };

  function getMovies(url) {
    setLoading(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setMovies([]);
        // console.log(response.results[0])
        Object.values(response.results).map((movie) => {
          setMovies((oldArray) => [...oldArray, movie]);
        });
        setLoading(false);
        // setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }

  return (
    <section id="homeContainer">
      <NavBar />
      <div className="bodyContainer">
        <div className="leftPNL">
          <button
            className="leftsidebtn explore active"
            onClick={() => {
              getMovies(
                "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
              );
            }}
          >
            Explore
          </button>
          <button
            className="leftsidebtn movies"
            onClick={() => {
              getMovies(
                "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
              );
            }}
          >
            Movies
          </button>
          <button
            className="leftsidebtn tvshows"
            onClick={() => {
              getMovies(
                "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
              );
            }}
          >
            TV Shows
          </button>
          <button className="leftsidebtn favorite">Favourite</button>
          <button className="leftsidebtn">About Us</button>
        </div>
        {loading ? (
          <div className="loadingPNL"><span style={{fontSize:"2rem", fontWeight:600}}>Loading</span></div>
        ) : (
          <div className="rightPNL">
            {movies.map((movie) => (
              <MovieItem
                movieTitle={movie.title == null ? movie.name : movie.title}
                movieIMG={movie.poster_path}
                movieID={movie.id}
                movieType={movie.genre_ids}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;

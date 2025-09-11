import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../../Utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  const rowRef = React.useRef(null);
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching from:", fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log("Response:", request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer not found:", error));
    }
  };

 // 👇 scroll function
  const scroll = (direction) => {
    if (!rowRef.current) return;
    const { clientWidth } = rowRef.current;
    const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };


  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

    
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        ‹
      </button>


      <div className="row_posters" ref={rowRef}>
        {movies.map((movie, index) =>
          (isLargeRow ? movie.poster_path : movie.backdrop_path) ? (
            <img
              key={index}
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          ) : null
        )}
      </div>

 <button className="scroll-btn right" onClick={() => scroll("right")}>
        ›
      </button>
        

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>

  );
};

export default Row;

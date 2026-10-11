import React, { useState, useEffect } from "react";
import moviesData from "../assets/data/sampleMovieData.json";

const MovieCards = () => {
  const [movies, setMovies] = useState(moviesData);

  useEffect(() => {
      setMovies(moviesData);
  }, []);

  
  return (
    <div>
      {movies.map((movie) => {
        const id = movie.imdbID || movie.id;
        const name = movie.Title || movie.name;
        const year = movie.Year || movie.year;
        const poster = movie.Poster;
        const rating = movie.imdbRating;

        return (
          <div key={id} style={cardStyle}>
            {poster && poster !== "N/A" ? (
              <img
                src={poster}
                alt={name}
                style={{ width: "100%", height: "240px", objectFit: "cover" }}
              />
            ) : (
              <div >No Image</div>
            )}

            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "0 0 6px 0", fontSize: "0.95rem" }}>{name}</h3>
              <p style={{ margin: "0 0 6px 0", fontSize: "0.85rem", color: "#666" }}>
                {year}
              </p>
              {rating && (
                <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: "bold" }}>
                  ⭐ {rating}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
const cardStyle = {
  width: "180px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  backgroundColor: "#fff",
};
export default MovieCards;
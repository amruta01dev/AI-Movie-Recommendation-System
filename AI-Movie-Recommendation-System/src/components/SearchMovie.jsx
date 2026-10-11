import React, { useState } from "react";
import moviesData from "../assets/data/sampleMovieData.json";
import searchData from "../assets/data/sampleSearchData.json"
import { getMovieMatches } from "../services/PromptExecutar";
const SearchMovie = ({ setSearchMovieResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = async (e) => {
    setSearchTerm(e.target.value);
    
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter")
    {
        const value = e.target.value;
        setSearchTerm(value);

        
        const query = searchTerm.trim().toLowerCase();
        if (!query) {
            setSearchMovieResult(moviesData);
        }
        else{
          try {
            console.log("Executing Prompt : ");
            const results = await getMovieMatches(query, movies);
            console.log("Gemini Output:", results);
          } 
          catch (error) {
            console.error("Error:", error);
          }
          setSearchMovieResult([]);
        }
    }
    return;
    
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1>Search The Movies</h1>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
       onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          padding: "8px 12px",
          width: "280px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchMovie;
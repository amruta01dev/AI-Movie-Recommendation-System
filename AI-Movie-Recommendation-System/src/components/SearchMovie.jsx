import React, { useState } from "react";
import moviesData from "../assets/data/sampleMovieData.json";
import searchData from "../assets/data/sampleSearchData.json"
import { getMovieMatches } from "../services/PromptExecutar";
import axios from "axios";
const SearchMovie = ({ setSearchMovieResult }) => {
  const [searchTerm, setSearchTerm] = useState("");


  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  
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
            const results = await getMovieMatches(query, searchData);
            console.log("Gemini Output:", results);
            
            var result = [];
            for (var i = 0; i < results.length; i++) {
              const url = `https://www.omdbapi.com/?i=${results[i].id}&apikey=${API_KEY}`;
              var apiresult = await axios.get(url);
              if (apiresult != null)
              {
                console.log(apiresult.data);
                result.push(apiresult.data);
              }
             
            }
            setSearchMovieResult(result);
          } 
          catch (error) {
            console.error("Error:", error);
          }
          
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
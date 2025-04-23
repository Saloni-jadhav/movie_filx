
import CollapsibleExample from "../component/nav1.js";
import "./Film.css";
import BasicExample2 from "../component/Card1.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown1 from "../component/Dropdown.js";
import NavScrollExample from "../component/nav1.js";
import TvShow from "../pages/TvShow.js";

function BasicExample1() {
  const [Data1, setData1] = useState([]);

  // Fetch data inside useEffect
  useEffect(() => {
    async function fetchUser() {
      try {
        // const url = "https://omdbapi.com/?apikey=4e9e8ed7&s=series";
        const url = "https://www.omdbapi.com/?apikey=c848f0d8&s=movie&y=2024";
        const userResult = await axios.get(url);
        console.log(userResult, "<=====result");
        setData1(userResult.data.Search);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchUser(); // Call the function
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  console.log(Data1, "<====D1");

  return (
    <>
      <NavScrollExample />
      <div className="outer">
        <div className="back">
          <h1>
            <b>Movies Released in 2024</b>
          </h1>
          <h4>
            <b>Select Year</b>
          </h4>
          <Dropdown1 />
        
       


          {/* <div className="card_cntr">
            {Data1.map((movieData) => (
              <BasicExample2 key={movieData.imdbID} data={movieData} />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default BasicExample1;

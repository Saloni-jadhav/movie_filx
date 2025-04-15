// import Dropdown from 'react-bootstrap/Dropdown';
// function Dropdown1() {
  
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="light" >
//         2024    
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-2">2024</Dropdown.Item>
//         <Dropdown.Item href="#/action-1">2023</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">2021</Dropdown.Item>

//         <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">2019</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">2018</Dropdown.Item>

//         <Dropdown.Item href="#/action-1">2017</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">2016</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">2015</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
  
//   );
// }

// export default Dropdown1;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included
// import "./dropdown.css"; // Import the custom CSS

// function Dropdown1() {
//   const [selectedYear, setSelectedYear] = useState("2024");
//   const [movies, setMovies] = useState([]);
//   const [message, setMessage] = useState("");

//   const fetchMovies = async (year) => {
//     setMessage("");
//     setMovies([]);

//     try {
//       // https://www.omdbapi.com/?apikey=c848f0d8&s=movie&y=2024
//       const response = await axios.get(
//         `https://omdbapi.com/?apikey=c848f0d8&s=movie&y=${year}`
//       );
//       if (response.data && response.data.Search) {
//         setMovies(response.data.Search);
//         // setMessage(`Movies from the year ${year} fetched successfully!`);
//       } else {
//         setMessage(`No movies found for the year ${year}.`);
//       }
//     } catch (error) {
//       setMessage("An error occurred while fetching movies.");
//     }
//   };

//   useEffect(() => {
//     fetchMovies(selectedYear);
//   }, [selectedYear]);

//   return (
//     <div className="container my-4">
//       <Dropdown>
//         <Dropdown.Toggle variant="light">
//           {selectedYear}
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           {["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"].map((year) => (
//             <Dropdown.Item
//               key={year}
//               onClick={() => setSelectedYear(year)}
//             >
//               {year}
//             </Dropdown.Item>
//           ))}
//         </Dropdown.Menu>
//       </Dropdown>

//       <div className="mt-4">
//         <p>{message}</p>
//         <div className="row">
//           {movies.map((movie) => (
//             <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//               <div className="card movie-card">
//                 <img
//                   src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
//                   className="card-img-top"
//                   alt={movie.Title}
//                 />
//                 {/* <div className="card-body">
//                   <h5 className="card-title">{movie.Title}</h5>
//                   <p className="card-text">
//                     <strong>Year:</strong> {movie.Year}
//                   </p>
//                 </div> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dropdown1;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dropdown.css";

function Dropdown1() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null); // State for modal

  const fetchMovies = async (year) => {
    setMessage("");
    setMovies([]);

    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=c848f0d8&s=movie&y=${year}`
      );
      if (response.data && response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMessage(`No movies found for the year ${year}.`);
      }
    } catch (error) {
      setMessage("An error occurred while fetching movies.");
    }
  };

  useEffect(() => {
    fetchMovies(selectedYear);
  }, [selectedYear]);

  return (
    <div className="container my-4">
      <Dropdown>
        <Dropdown.Toggle variant="light">
          {selectedYear}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"].map((year) => (
            <Dropdown.Item
              key={year}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div className="mt-4">
        <p>{message}</p>
        <div className="row">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              onClick={() => setSelectedMovie(movie)} // Set selected movie on click
              style={{ cursor: "pointer" }} // Make the card clickable
            >
              <div className="card movie-card">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={movie.Title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Movie Details */}
      {selectedMovie && (
        <Modal show={true} onHide={() => setSelectedMovie(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <p><strong>Year:</strong> {selectedMovie.Year}</p>
            <p><strong>IMDB ID:</strong> {selectedMovie.imdbID}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedMovie(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Dropdown1;

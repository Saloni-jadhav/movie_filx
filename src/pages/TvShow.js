import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TvShow.css";
import NavScrollExample from "../component/nav1";
 
function TvShow() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchMovies = async (year) => {
    setMessage("");
    setMovies([]);

    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=4e9e8ed7&s=series&y=${year}`
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

  const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=c848f0d8&i=${imdbID}`
      );
      setSelectedMovie(response.data);
      setShowModal(true);
    } catch (error) {
      setMessage("An error occurred while fetching movie details.");
    }
  };

  useEffect(() => {
    fetchMovies(selectedYear);
  }, [selectedYear]);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return ( 
   <>
    < NavScrollExample/>
    <div className="back">
          <h1>
            <b>Recent 2024 TV Shows</b>
          </h1>
          <h4>
            <b>Select Year</b>
          </h4>
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
              onClick={() => fetchMovieDetails(movie.imdbID)}
              style={{ cursor: "pointer" }}
            >
              <div className="card movie-card">
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={movie.Title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Movie Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        {selectedMovie && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovie.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Type:</strong> {selectedMovie.Type}</p>
              <p><strong>Rating:</strong> {selectedMovie.imdbRating}</p>
              <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
              <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
              <p><strong>Director:</strong> {selectedMovie.Director}</p>
            </Modal.Body>
           
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="success" onClick={handleCloseModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
    </div>
    </>
  );
}

export default TvShow;

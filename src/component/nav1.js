// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Film from '../pages/Film';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../img/download.png'
// import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap';
// function CollapsibleExample() {
//   return (
    
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      
//       <Container>
//         <img src={logo} style={{ width: "50px", height: "30px" }}/>
//         <Navbar.Brand href="#home"><b>Home</b></Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#Film"><b>TV Show</b></Nav.Link>
//             <NavDropdown title="Movies" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#new & popular">New & Popular</NavDropdown.Item>
//               <NavDropdown.Item href="#my list">
//                My List
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//           {/* <Nav>
//             <Nav.Link href="#Search"><b>Search</b></Nav.Link>
//           </Nav> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CollapsibleExample;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/movie logo.png';


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <img src={logo} style={{ width: "40px", height: "40px" }}/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><b>Home</b></Nav.Link>
            <Nav.Link href="#action2"><b>Tv Shows</b></Nav.Link>
            <Nav.Link href="#action1"><b>Movies</b></Nav.Link>
            <Nav.Link href="#action2"><b>New & Popular</b></Nav.Link>
            <Nav.Link href="#action2"><b>My List</b></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary"><b>Search</b></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
 }
 export default NavScrollExample;


// import React, { useState } from "react";
// import './navbar.css';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedMovie(null);
//   };

//   const handleSearch = async () => {
//     if (!searchQuery.trim()) {
//       alert("Please enter a search term.");
//       return;
//     }
//     setIsLoading(true);
//     setSearchResults([]); 

//     try {
//       const response = await fetch(
//         https://omdbapi.com/?apikey=4e9e8ed7&s=${encodeURIComponent(searchQuery)}
//       );
//       const data = await response.json();

//       if (data.Response === "True") {
//         setSearchResults(data.Search); 
//       } else {
//         setSearchResults([]); 
//       }
//     } catch (error) {
//       console.error("Error fetching movie data:", error);
//     } finally {
//       setIsLoading(false);
//       setIsModalOpen(true); 
//     }
//   };

//   const handleSelectMovie = (movie) => {
//     setSelectedMovie(movie); 
//     setIsModalOpen(true); 
//   };

//   return (
//     <nav>
//     {/* Hamburger Menu for Small Screens */}
//     <div className="hamburger" onClick={toggleMenu}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
//         <path
//           fillRule="evenodd"
//           d="M1.5 3a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5z"
//         />
//       </svg>
//     </div>

//     <ul className={isMenuOpen ? "show-menu" : ""}>
//       <li>Home</li>
//       <li>TV Shows</li>
//       <li>Movies</li>
//       <li>New & Popular</li>
//       <li>My List</li>
//       <button type="button" className="primary">
//         Notifications <span className="visually-hidden">Loading...</span>
//         <i className="bi bi-bell-fill"></i><span className="primary">4</span>
//       </button>
//     </ul>

   
//     <div className="search-bar">
//  <input
//           type="text"
//           placeholder="Search for movies..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch} className="search-button">
//           Search
//         </button>
//       </div>

//       {isModalOpen && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close-button" onClick={closeModal}>
//               &times;
//             </span>

//             {isLoading ? (
//               <p>Loading...</p>
//             ) : selectedMovie ? (
//               <>
               
//                 <img
//                   src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "https://via.placeholder.com/300"}
//                   alt={selectedMovie.Title}
//                   className="modal-poster"
//                 />
//                 <h3>{selectedMovie.Title}</h3>
//                 <p><strong>Year:</strong> {selectedMovie.Year}</p>
//                 <p><strong>Type:</strong> {selectedMovie.Type}</p>
//               </>
//             ) : searchResults.length > 0 ? (
//               searchResults.map((movie) => (
//                 <div
//                   key={movie.imdbID}
//                   className="movie-item"
//                   onClick={() => handleSelectMovie(movie)} 
//                   style={{ cursor: "pointer" }} 
//                 >
//                   <img
//                     src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
//                     alt={movie.Title}
//                     className="modal-poster"
//                   />
//                   <h3>{movie.Title}</h3>
//                   <p><strong>Year:</strong> {movie.Year}</p>
//                   <p><strong>Type:</strong> {movie.Type}</p>
//                 </div>
//   ))
// ) : (
//   <p>No results found.</p>
// )}
// </div>
// </div>
// )}
// </nav>
// );
// }

// export default Navbar;

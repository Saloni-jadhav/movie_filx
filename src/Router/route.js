import React from "react";
import {  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import BasicExample1 from "../pages/Film";
import TvShow from "../pages/TvShow";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          { 
          <Route exact path="/" element={<BasicExample1/>} />
      
           }
            { 
          <Route exact path="/TvShow" element={<TvShow/>} />
      
           }
          
        </Routes>
      </Router>
    );
  }
  export default AppRoute;
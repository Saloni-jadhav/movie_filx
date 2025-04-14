import React from "react";
import {  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import BasicExample1 from "../pages/Film";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          { 
          <Route exact path="/" element={<BasicExample1/>} />
      
           }
        </Routes>
      </Router>
    );
  }
  export default AppRoute;
import React from "react";
import LoginPage from "./Pages/LoginPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import StudentPage from "./Pages/StudentPage";
function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/StudentPage" element={<StudentPage/>} />
        </Routes>
      </Router>
  );
}

export default App;

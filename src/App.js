import "./App.css";
import Footer from "./components/Footer/Footer";
import Main from "./components/main/Main";
import NavBar from "./components/NavBar/NavBar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Details />} />
        {/* <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

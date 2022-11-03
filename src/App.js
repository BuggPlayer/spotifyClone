import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details/Details";

import Error from "./components/atom/Error/Error";
import Footer from "./components/Footer/Footer";
import Home from "./Page/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Details />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

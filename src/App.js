
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import Details from "./Page/Details/Details";
import ToggleContextProvider from "./Context/ToggleContext";
import "./App.css";
function App() {
  return (
    <ToggleContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </ToggleContextProvider>
  );
}

export default App;

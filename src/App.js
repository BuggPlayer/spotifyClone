import "./App.css";
import Main from "./components/main/Main";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="outerWrap">
      <div className="app">
        <NavBar />
        <Main />
      </div>
      <div className="musicControl">music control</div>
    </div>
  );
}

export default App;

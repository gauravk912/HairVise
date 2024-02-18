import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route  path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

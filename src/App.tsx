import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from './components/Quize'

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/quiz' element={<Quiz/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

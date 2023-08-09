import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
 <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/Register" element={<Register />} ></Route>
        </Routes>
        <Footer />
      </Router>
 </>
  );
}

export default App;

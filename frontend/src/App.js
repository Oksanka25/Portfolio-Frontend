import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const URL = "https://oksana-portfolio.herokuapp.com/"
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/projects" element={<Projects URL={URL} />}>
        </Route>
        <Route path="/about" element={<About URL={URL} />} >
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

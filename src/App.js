// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Star } from "./Components/Star";
import { FrontPage } from "./Components/FrontPage";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import photo from "../src/Assest/photo.jpeg";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./App.css";
import Skill from "./Components/Skill";
import Contatct from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Star />
      <Nav />
      <Home />
      {/* <div> */}
        <About />
      {/* </div> */}
      {/* <div> */}
        <Skills />
        <Projects />
        <Contatct />
        {/* <Skill /> */}
      {/* </div> */}
    </div>
  );
}

export default App;

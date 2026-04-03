import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <HashRouter>
      <div style={{ backgroundColor: "#0f172a", minHeight: "100vh" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            padding: "20px 0",
            backgroundColor: "#0f172a"
          }}
        >
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
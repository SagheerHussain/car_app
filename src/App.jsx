import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About"; // Assuming the About page is located at this path

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-zinc-950 flex flex-col text-zinc-300 overflow-hidden">
          {/* Navbar */}
          <Navbar />

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<About />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;

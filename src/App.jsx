import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Banner from "./pages/Banner";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container mx-auto">
        <Banner></Banner>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;

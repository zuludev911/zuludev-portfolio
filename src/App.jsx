import Header from "./components/Header";
import AboutMeSection from "./components/AboutMeSection";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="scroll-container">
      <Header />
      <AboutMeSection />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default App;

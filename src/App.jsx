import "./App.css"; // Assuming you will create a CSS file for styling
// import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import TechSkills from "./components/TechSkills";
import RecentWorks from "./components/RecentWorks";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <About />
        <Education />
        <TechSkills />
        <RecentWorks/>
        <Footer/>
        {/* <Portfolio /> */}
      </main>
    </div>
  );
};

export default App;

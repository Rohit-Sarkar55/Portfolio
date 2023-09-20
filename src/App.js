
import './App.css';
import Banner from './Components/Banners/Banner';
import Features from './Components/Features';
import Navbar from './Components/Navbar';
import Projects from './Components/projects/Projects';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      
      
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />    
        <Banner/>
        <Features />
        <Projects />
      </div>
    </div>
  );
}

export default App;

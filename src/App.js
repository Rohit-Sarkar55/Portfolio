
import './App.css';
import Banner from './Components/Banners/Banner';
import Features from './Components/Features';
import Navbar from './Components/Navbar';
import Resume from './Components/myResume/Resume';
import Project from './Components/projects/Project';






function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      
      
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />    
        <Banner/>
        <Features />
        <Project />
        <Resume />
      </div>
    </div>
  );
}

export default App;

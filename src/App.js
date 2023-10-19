
import './App.css';
import Banner from './Components/Banners/Banner';
import Features from './Components/Features';
import Navbar from './Components/Navbar';
import Contacts from './Components/contact/Contacts';
import Footer from './Components/footer/Footer';
import Resume from './Components/myResume/Resume';
import Project from './Components/projects/Project';
import Testimonial from './Components/testimonial/Testimonial';






function App() {
  
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">

      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Banner/>
        <Features />
        <Project />
        <Resume />
        <Testimonial />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;

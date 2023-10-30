// App.js
import React from 'react';
import NavScrollExample from './components/Navbar'; // Import the Navbar component
import IndividualIntervalsExample from './components/carousel.js'; // Import the carousel component
import DemoVideo from './components/demovedio.js';
import './App.css'; // Import your custom CSS for styling
import ContactDetailsCard from './components/contactcard.js';
import BannerSection from './components/home.js';
function App() {
  return (
    <div >
     
      <NavScrollExample/> 
      {/* Use the Navbar component */}
      <BannerSection/>
      <div className="carousel-container">
      <IndividualIntervalsExample/>
      </div>
      {/* Use the Navbar component */}
      <div className="video-container">
      <DemoVideo   />
      
      </div>
      <ContactDetailsCard />
      
    </div>
  );
}

export default App;

// App.js
import React from 'react';
import NavScrollExample from './components/Navbar'; // Import the Navbar component

import './App.css'; // Import your custom CSS for styling
import ContactDetailsCard from './components/contactUs.js';
import BannerSection from './components/home.js';
import  FollowUsSection from './components/followUs.js';
import FoodDelivery from './components/DeliveryService.js';
import MyCarousel from './components/NewCarousel.js';
import FeedbackForm from './components/feedBack.js';
import VideoCard from './components/demovideo.js';
import DeliveryServiceForm from './components/UserDetails.js';
function App() {
  return (
    <div >
     
      <NavScrollExample/> 
      <BannerSection/>
      
      
      <MyCarousel/>
      < VideoCard videoURL = "https://youtu.be/PhPKAvFfLEE?si=M0-_6TVykwdfJsK4"/>
      <FoodDelivery />
      <FeedbackForm/>
      <DeliveryServiceForm/>
      < FollowUsSection/>

      <ContactDetailsCard />
      
    </div>
  );
}

export default App;

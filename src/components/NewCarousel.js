import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './NewCarousel.css'; // Create a CSS file for your custom styles


const MyCarousel = () => {
  return (
    <div className="carousel-container shadow">
      <h2 className="main-heading">Our Services</h2>
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={true}
      showStatus={true}
      showThumbs={true}
      interval={1300} // Adjust this value to change the auto-play speed
    >
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698735275/swastlfuqxk5hckecxek.jpg" alt="sweet pic" />
        <p className="carousel-text">Get Fresh Fruits to your doorstep</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698735489/alcijtdmn8dnuk71lip5.jpg" alt="juice pic" />
        <p className="carousel-text">Veg and Non-Veg Food from desired local restaurents</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698736078/iycp0mhh3js6eoxtui8y.jpg" alt="samosa pics" />
        <p className="carousel-text">Get Fresh Vegetables to your doorstep</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698736728/eqzrmn1pa0ccfthefmbm.jpg" alt="samosa pics" />
        <p className="carousel-text">We offer grocery delivery service</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698737241/tyu5vmsdbxsftm8rsr08.jpg" alt="samosa pics" />
        <p className="carousel-text">Get all types of snacks from local stores</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698737551/t1jpilcmp5jv7jlkwrpl.jpg" alt="samosa pics" />
        <p className="carousel-text">We deliver a wide variety of locally available juices to your doorstep.</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698737938/cz8wlaefeycef84lomgq.jpg" alt="samosa pics" />
        <p className="carousel-text">Sweet treats and bakery delights delivered for every occasion from local stores to your door.</p>
      </div>
      <div className="carousel-item">
        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png" alt="dessert-pic" />
        <p className="carousel-text">Desserts</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698589398/k3iejltyajaypz5fownk.jpg" alt="electrician service pic" />
        <p className="carousel-text">For our valued customers, we offer electrician services.</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698592215/b3tbp3gv73ehy9autxzf.jpg" alt="pharma-delivery pic" />
        <p className="carousel-text">"Delivering pharmacy essentials right to your door, for your convenience."</p>
      </div>
      <div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698762004/fif3c04cqzlxtqkfs5vh.jpg" alt="pluber service pic" />
        <p className="carousel-text">For our valued customers, we offer plumber  services.</p>
      </div>

<div className="carousel-item">
        <img src="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698763916/fimhym23l7axzwepsub0.jpg" alt="pluber service pic" />
        <p className="carousel-text">For delivery, please contact us at 8121784826. </p>
      </div>
    </Carousel>
     </div>
  );
};

export default MyCarousel;

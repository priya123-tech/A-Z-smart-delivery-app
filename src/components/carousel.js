import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage.js';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" url="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698589387/wav3erlzxtfjmuu2prxc.jpg"/>
        <Carousel.Caption>
          <h3>Food and Grocery Delivery</h3>
          <p>"Seamless home delivery of fresh food and groceries from your neighborhood stores."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="Second slide" url="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698589398/k3iejltyajaypz5fownk.jpg"/>
        <Carousel.Caption>
          <h3 >Electrician and Plumber Service</h3>
          <p>"Reliable local electrician and plumber services just a call away."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" url="https://res.cloudinary.com/dhsmbae5q/image/upload/v1698592215/b3tbp3gv73ehy9autxzf.jpg"/>
        <Carousel.Caption>
          <h3 >pharmacy Delivery</h3>
          <p>"Secure pharmacy delivery for your distant loved ones' health and well-being."  </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
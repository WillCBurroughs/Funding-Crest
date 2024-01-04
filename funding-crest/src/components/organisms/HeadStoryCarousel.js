import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../molecules/ExampleCarouselImage';
import HeadStoryCarouselStyle from '../../HeadStoryCarousel.css';

function HeadStoryCarousel() {
  const [captionText, setCaptionText] = useState('Competing at a pitch competition? This is what you should wear');

  const handleSlideChange = (selectedIndex) => {
    const slides = [
      'Competing at a pitch competition? This is what you should wear',
      'The ten best websites to actually secure grant funding',
      'Twenty pitch competitions in Kentucky you can apply to',
    ]; // Replace with actual slide label data or fetch from the Carousel

    setCaptionText(slides[selectedIndex]);
  };

  return (
    <div>
        <h2 className="ml-lg-70 mt-2" style={{fontWeight: "900"}}>{captionText}</h2>
        <p className="ml-lg-70 mt-2" style ={{color: "dimgray", fontSize: "25px", fontWeight: "800"}}>William Burroughs </p>
      <Carousel
        // className="mx-auto ms-5"
        className="ml-lg-70"
        onSelect={handleSlideChange}
      >
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" imageName='https://wallpapers.com/images/hd/moon-retro-vector-art-7op8fanjrtajdzp0.jpg' />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" imageName='https://wallpapers.com/images/hd/bright-blue-full-moon-3aezu4sm39ywd0ua.jpg' />
          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" imageName='https://wallpapercave.com/wp/HvDTf32.jpg' />
          <Carousel.Caption>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default HeadStoryCarousel;

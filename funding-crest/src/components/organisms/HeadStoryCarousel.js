import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../molecules/ExampleCarouselImage";
import HeadStoryCarouselStyle from "../../HeadStoryCarousel.css";
import { Link } from "react-router-dom";
import pitchstory from "../../images/pitchphoto.jpg"

function HeadStoryCarousel() {
  const [captionText, setCaptionText] = useState(
    "Competing at a pitch competition? This is what you should wear"
  );

  const slideMappings = {
    "Competing at a pitch competition? This is what you should wear":
      "/Competing-At-Pitch-Competition-This-Is-What-You-Should-Wear",
    "The ten best websites to actually secure grant funding":
      "/Ten-Best-Places-To-Apply-For-Grants",
    "Twenty pitch competitions in Kentucky you can apply to":
      "/Twenty-Pitch-Competitions-In-Kentucky-You-Can-Apply-To",
  };

  const handleSlideChange = (selectedIndex) => {
    const slides = Object.keys(slideMappings);
    setCaptionText(slides[selectedIndex]);
  };

  return (
    <Link to={slideMappings[captionText]} style={{ textDecoration: "none" }}>
      <div>
        <h2
          className="ml-lg-70 mt-2"
          style={{ fontWeight: "900", color: "#212529" }}
        >
          {captionText}
        </h2>
        <p
          className="ml-lg-70 mt-2"
          style={{ color: "dimgray", fontSize: "25px", fontWeight: "800" }}
        >
          William Burroughs{" "}
        </p>
        <Carousel className="ml-lg-70" onSelect={handleSlideChange}>
          <Carousel.Item>
            <ExampleCarouselImage
              text="First slide"
              imageName={pitchstory}
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              text="Second slide"
              imageName="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage
              text="Third slide"
              imageName="https://wallpapercave.com/wp/HvDTf32.jpg"
            />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Link>
  );
}

export default HeadStoryCarousel;

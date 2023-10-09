import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const slides = [
  {
    id: 1,
    content: "Slide 1 Content",
  },
  {
    id: 2,
    content: "Slide 2 Content",
  },
  {
    id: 3,
    content: "Slide 3 Content",
  },
];

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};
const SliderComponent = () => {
  const settings = {
    dots: false, // Remove the dots navigation
    arrows: false, // Remove the default arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-8 bg-blue-500 overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none focus:outline-none">
            <div className="p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{slide.content}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

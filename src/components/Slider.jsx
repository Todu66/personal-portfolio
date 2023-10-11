import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SliderComponent = () => {
  const settings = {
    dots: true, // Show the dots navigation
    arrows: false, // Remove the default arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};



  return (
    <div className="container  mx-auto mt-8 bg-[#E3E3E3] overflow-hidden ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
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

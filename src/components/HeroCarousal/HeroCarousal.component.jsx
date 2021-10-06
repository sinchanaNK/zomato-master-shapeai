import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settingsLG = { arrows:true,
         autoplay:true,
         centerMode:true,
          centerPadding:"300px",
        slidesToShow:1,
        infinite:true,
        slidesToScroll:1,
    };

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const images = ["https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1633351334381-f9f86aa62a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1633435901549-110fcd301c7e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1633127095539-249f21a8f55d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1633197405063-6477a04b604a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ];
      
      return <>
      <div className="lg:hidden">
      <HeroSlider {...settings}>
          {images.map((image) => (
              <div className="w-full,h-56 md:h-80 py-3 ">
                  <img src={image}
                   alt="testing" 
                   className="w-full h-full" />
              </div>
          ))}
      </HeroSlider>
      </div>

      <div  className="hidden lg:block">
      <HeroSlider {...settingsLG}>
          {images.map((image) => (
              <div className="w-full,h-80 px-2 py-3">
                  <img src={image} 
                  alt="testing" 
                  className="w-full h-full" />
              </div>
          ))}
      </HeroSlider>
      </div>
    
    </>
};

export default HeroCarousal;
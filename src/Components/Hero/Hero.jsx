import React from "react";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { Carousel } from "react-bootstrap";

import Farm_1 from '../../assets/Cow_Chicken/3.jpg'
import Farm_2 from '../../assets/Cow_Chicken/4.jpg'
import Farm_3 from '../../assets/Cow_Chicken/5.jpg'
import Farm_4 from '../../assets/Cow_Chicken/6.jpg'


const Hero = () => {
  return (
    <div id="hero" style={{ height: "100%" }}>
      <Carousel interval={5000}>
        {/* 1st slider */}
        <Carousel.Item>
          <img className="d-block w-100" src={Farm_1} alt="First slide" />
          <Carousel.Caption>
            <h3>
              On
              <Typewriter
                words={[" Test, This Page Is No Ready, We Will Be Back Soon !!! "]}
                loop={Infinity}
                cursor
                cursorStyle=""
                deleteSpeed={90}
                typeSpeed={120}
                delaySpeed={5000}
              />
            </h3>
            <p>On Test, This Page Is No Ready, We Will Be Back Soon !!!</p>
          </Carousel.Caption>
          {/* 2nd slider */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Farm_2} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              On
              <Typewriter
                words={[" Test, This Page Is No Ready, We Will Be Back Soon !!! "]}
                loop={Infinity}
                cursor
                cursorStyle=""
                deleteSpeed={90}
                typeSpeed={120}
                delaySpeed={5000}
              />
            </h3>
            <p>Test, This Page Is No Ready, We Will Be Back Soon !!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 3rd slider */}
        <Carousel.Item>
          <img className="d-block w-100" src={Farm_3} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              On
              <Typewriter
                words={[" Test, This Page Is No Ready, We Will Be Back Soon !!! "]}
                loop={Infinity}
                cursor
                cursorStyle=""
                deleteSpeed={90}
                typeSpeed={120}
                delaySpeed={5000}
              />
            </h3>
            <p>Test, This Page Is No Ready, We Will Be Back Soon !!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* 4th slider */}
        <Carousel.Item>
          <img className="d-block w-100" src={Farm_4} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              On
              <Typewriter
                words={[" Test, This Page Is No Ready, We Will Be Back Soon !!! "]}
                loop={Infinity}
                cursor
                cursorStyle=""
                deleteSpeed={90}
                typeSpeed={120}
                delaySpeed={5000}
              />
            </h3>
            <p>Test, This Page Is No Ready, We Will Be Back Soon !!!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;

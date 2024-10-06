// HomePage.js
import React, { useState } from "react";
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';
import Title from '../Components/Title/Title';
import Card from '../Components/Card/Card';
import MyVerticallyCenteredModal from '../Components/Modal/Modal';
import product_1 from '../assets/Products_image/one.png';
import About from '../Components/About/About';
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

// all card image, name and data
const cardsData = [
  { image: product_1, name: "Name 1", detail: "Detail 1" },
  { image: product_1, name: "Name 2", detail: "Detail 2" },
  { image: product_1, name: "Name 3", detail: "Detail 3" },
  { image: product_1, name: "Name 4", detail: "Detail 4" },
  { image: product_1, name: "Name 5", detail: "Detail 5" },
  { image: product_1, name: "Name 6", detail: "Detail 6" },
];

const HomePage = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [playState, setPlayState] = useState(false);


  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalShow(true);
  };

  return (
    <>
      <NavigationBar />
      <Hero />
      <Title title="Products" />
      <Card cards={cardsData} onCardClick={handleCardClick} />
      <Title title="Contact Us" />
      <Contact />
      <About
        setPlayState={setPlayState}
        isVisible={true}
        aboutdetails={
          "Test Part"
        }
      />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Footer />

      {selectedCard && (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          card={selectedCard}
        />
      )}
    </>
  );
};

export default HomePage;

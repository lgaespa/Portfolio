import React, { useState } from "react";
import { Button, Carousel, Skeleton } from "antd";
import { GoMarkGithub } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import "./HotelDetails.less";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
};
const HotelDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="carouselContainer">
      <div className="modalTitle">HENRY HOTEL</div>
      <Carousel {...settings}>
        {!isLoaded && (
          <>
            <div className="skeleton1">
              <Skeleton />
            </div>
            <Skeleton
              className="slidesImages"
              style={{ marginBottom: "3rem" }}
            />
          </>
        )}
        <div className="slideContainer">
          <img
            onLoad={() => setIsLoaded(true)}
            className="slidesImages"
            src="./projects/hotel1.png"
            alt="Img not found"
          />
        </div>

        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/hotel2.png"
            alt="Img not found"
          />
        </div>

        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/hotel3.png"
            alt="Img not found"
          />
        </div>
        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/hotel4.png"
            alt="Img not found"
          />
        </div>
        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/hotel5.png"
            alt="Img not found"
          />
        </div>
      </Carousel>

      <div className="modalText">
        Proyecto donde se desarrolló un sitio web para la gestión de un hotel y
        todo lo que eso conlleva. Se utilizaron metodologías ágiles como SCRUM,
        y tecnologías como Typescript, React Js, Supabase, Redux, AntDesign.
      </div>
      <div className="modalLinksContainer">
        <div>
          <Button
            className="modalButtons"
            href={"https://github.com/lgaespa/ecommerce-FT10-G2"}
            target="_blank"
          >
            HenryHotel
            <GoMarkGithub className="iconContainer" />
          </Button>
        </div>
        <div>
          <Button
            className="modalButtons"
            href={"https://henryhotel.hruiz.com/"}
            target="_blank"
          >
            Website
            <FiExternalLink className="iconContainer" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;

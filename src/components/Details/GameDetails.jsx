import React from "react";
import { Button, Carousel } from "antd";
import { GoMarkGithub } from "react-icons/go";
import "./HotelDetails.less";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
};

const GameDetails = () => {
  return (
    <div className="carouselContainer">
      <div className="modalTitle">GameLibrary</div>

      <Carousel {...settings}>
        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/games1.png"
            alt="Img not found"
          />
        </div>

        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/games2.png"
            alt="Img not found"
          />
        </div>

        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/games3.png"
            alt="Img not found"
          />
        </div>
      </Carousel>

      <div className="modalText">
        Proyecto personal desarrollado con React js, Node js, Express,
        PostgreSQL, Sequelize y Redux para soyHenry, el cual permite realizar
        busquedas de videojuegos usando la API RAWG, así como crear nuevos
        juegos almacenandolos en una base de datos(postgreSQL)
      </div>
      <div className="modalLinksContainer">
        <div>
          <Button
            type="text"
            href={"https://github.com/lgaespa/musicApi-1"}
            target="_blank"
          >
            GameLibrary
            <GoMarkGithub className="iconContainer" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;

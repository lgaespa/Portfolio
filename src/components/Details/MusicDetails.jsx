import React, { useState } from "react";
import { Button, Carousel, Skeleton } from "antd";
import { GoMarkGithub } from "react-icons/go";
import "./HotelDetails.less";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
};

const MusicDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="carouselContainer">
      <div className="modalTitle">MusicAPI</div>

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
            src="./projects/music1.png"
            alt="Img not found"
          />
        </div>

        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/music2.png"
            alt="Img not found"
          />
        </div>

        <div className="slideContainer">
          <img
            className="slidesImages"
            src="./projects/music3.png"
            alt="Img not found"
          />
        </div>
      </Carousel>

      <div className="modalText">
        Proyecto desarrollado con React js, Redux, React-Spring, el cual usa la
        API de Spotify para listar las ultimas novedades musicales, ver los
        generos, así como la opcion de realizar busquedas de algo en especifico.
      </div>
      <div className="modalLinksContainer">
        <div>
          <Button
            type="text"
            href={"https://github.com/lgaespa/musicApi"}
            target="_blank"
          >
            MusicAPI
            <GoMarkGithub className="iconContainer" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MusicDetails;

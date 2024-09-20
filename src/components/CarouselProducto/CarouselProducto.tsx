import { useEffect, useState } from "react";

import iconNext from "../../assets/icons/Next.svg";
import imgProduct from "../../assets/img/ProductoSupplyChain/img-sc.svg";
import "./CarouselProducto.css";

const CarouselProducto = () => {
  const [current, setCurrent] = useState(0);
  const [defaultNext, setDefaultNext] = useState(true);
  const items = [
    {
      title: "LANZAMIENTOS",
      name: "My Fleet.",
      description: `Sistema que nos ayuda a gestionar y controlar la flota Walmart dedicada y propia,
      los dispositivos GPS, así como los inventarios, mantenimientos preventivos,
      correctivos y los siniestros.`,
      img: imgProduct,
    },
    {
      title: "LANZAMIENTOS",
      name: "Backhaul",
      description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
          industrias desde el año 1500, cuando un impresor (N. del T. persona que se`,
      img: imgProduct,
    },
  ];
  const imageSlides = document.getElementsByClassName("slide-image");

  const nextImage = () => {
    let newIndex = current === items.length - 1 ? 0 : current + 1;
    imageSlides[current].className = "slide-image leftOut";
    imageSlides[newIndex].className = "slide-image leftIn";
    setCurrent(newIndex);
  };
  const prevImage = () => {
    let newIndex = current === 0 ? items.length - 1 : current - 1;
    imageSlides[current].className = "slide-image rightOut";
    imageSlides[newIndex].className = "slide-image rightIn";
    setCurrent(newIndex);
  };

  useEffect(() => {
    if (defaultNext) {
      const interval = setInterval(() => {
        nextImage();
      }, 8000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="gallery-container sombra">
      <span
        className="button-prev"
        onClick={() => {
          prevImage();
          setDefaultNext(false);
        }}
      >
        <img src={iconNext} alt="" />
      </span>
      <span
        className="button-next"
        onClick={() => {
          nextImage();
          setDefaultNext(false);
        }}
      >
        <img src={iconNext} alt="" />
      </span>
      <div className="gallery-track">
        {items.map((item, index) => {
          return (
            <div
              className="slide-image"
              style={
                index === 0
                  ? { transform: "translateX(0%)" }
                  : { transform: "translateX(100%)" }
              }
            >
              <div className="row container-slide">
                <div
                  className="col-6"
                  style={{
                    marginTop: "75px",
                  }}
                >
                  <p className="title-slide">{item.title}</p>
                  <p className="title-product">{item.name}</p>
                  <p
                    style={{
                      width: "495px",
                      marginBottom: "19px",
                    }}
                  >
                    {item.description}
                  </p>
                  <p>
                    <button className="btn btn-primary boton-primario">
                      Conocer más
                    </button>
                  </p>
                </div>
                <div className="col-6 mt-5">
                  <img src={item.img} alt="" className="img-slide" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselProducto;

import { useState } from "react";

import iconNext from "../assets/next.svg";
import iconPrev from "../assets/next.svg";
import imgBgSC from "../assets/bg-supply-chain.svg";
import imgProduct from "../assets/supply-chain-img.svg";

import "./CarouselExample.css";

const CarouselExample = () => {
    const [current, setCurrent] = useState(0);
    const items = [{
        title: 'Lanzamientos',
        name: 'My Fleet.',
        description: `Sistema que nos ayuda a gestionar y controlar la flota Walmart dedicada y propia,
        los dispositivos GPS, así como los inventarios, mantenimientos preventivos,
        correctivos y los siniestros.`,
        img: imgProduct,
    }, {
        title: 'Lanzamientos',
        name: 'Backhaul',
        description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
            industrias desde el año 1500, cuando un impresor (N. del T. persona que se`,
        img: imgProduct,
    }];
    const imageSlides = document.getElementsByClassName("slide-image");
    
    const nextImage = () => {
      let newIndex = (current === items.length - 1 ? 0 : current + 1);
      imageSlides[current].className = "slide-image leftOut";
      imageSlides[newIndex].className= "slide-image leftIn";
      setCurrent(newIndex);
    }
    const prevImage = () => {
      let newIndex = (current === 0 ? items.length - 1 : current - 1);
      imageSlides[current].className = "slide-image rightOut";
      imageSlides[newIndex].className= "slide-image rightIn";
      setCurrent(newIndex);
    }
    
    return (
      <div className="gallery-container sombra">
        <span className="button-prev" onClick={prevImage}><img src={iconPrev} alt="" /></span>
        <span className="button-next" onClick={nextImage}><img src={iconNext} alt="" /></span>
        <div className="gallery-track">
          {
            items.map((item, index) => {
              return <>
                <div
                className="slide-image"
                style={ (index === 0) ? { transform:"translateX(0%)" }
                                      : { transform:"translateX(100%)" }}
                >
                   <div className="row container-slide">
                        <div className="col-6 mt-5">
                            <p className="title-slide">{item.title}</p>
                            <p className="title-product">{item.name}</p>
                            <p>{item.description}</p>
                            <p>
                                <button className="btn btn-primary boton-primario">Conocer más</button>
                            </p>
                        </div>
                        <div className="col-6 m-auto">
                            <img src={item.img} alt="" className="img-slide" />
                        </div>
                    </div>
                </div>
              </>
            })
          }
        </div>
      </div>
    )
  }
  
  export default CarouselExample;
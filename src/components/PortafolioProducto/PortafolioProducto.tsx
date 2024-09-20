import './PortafolioProducto.css';
import CarouselAtomComponent from '../Atoms/Carousel-atom';

export const PortafolioProducto = () => {
    return (
        <div className="portfolio-product-container">
            <h2 className="titulo-seccion text-center mb-4">
                Portafolios dentro de la oficina de producto
            </h2>
            <CarouselAtomComponent />
        </div>
    );
};

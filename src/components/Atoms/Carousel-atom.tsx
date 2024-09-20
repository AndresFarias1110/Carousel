import './Carousel-atom.css';
import image1 from '../../assets/img/ProductoSupplyChain/inbound-imports.png';
import image2 from '../../assets/img/ProductoSupplyChain/img-dc.png';
import image3 from '../../assets/img/ProductoSupplyChain/img-transportation.png';
import iconFlecha from '../../assets/icons/icon-flecha.svg';

const CarouselAtomComponent = () => {
    const items = [
        {
            background: `url(${image1})`,
            index: 0,
            title: 'Inbound & Imports',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            background: `url(${image2})`,
            index: 1,
            title: 'Omni DC & FC',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
        {
            background: `url(${image3})`,
            index: 2,
            title: 'Omni Transportation',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        },
    ];

    return (
        <div className="carousel-container">
            <div className="flexing">
                {items.map((item) => (
                    <div
                        className="carousel-item-walmart"
                        style={{
                            backgroundImage: item.background,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <h2 className="title">{item.title}</h2>

                        <div className="inner-description">
                            <div className="inner-data">
                                <span>{item.title}</span>
                                <p className="description">{item.desc}</p>
                                <button className="btn btn-primary btn-conoce-mas">
                                    Conoce más aquí
                                    <img src={iconFlecha} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselAtomComponent;

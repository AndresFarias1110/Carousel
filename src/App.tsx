import './App.css';
import CarouselExample from './carousel-example/CarouselExample';
import img from "./assets/bg-curva-negro.svg";

function App() {
  return (
    <div className="App">
      <div className='row header'>
      </div>
      <div className='secctions'>
        <img src={img} alt="" className='img-fluid img-azul' />
        <div className='carousel-container'>
          <CarouselExample></CarouselExample>
        </div>

      </div>
    </div>
  );
}

export default App;

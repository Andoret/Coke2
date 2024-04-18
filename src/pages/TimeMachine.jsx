import '../css/timeMachine.css';
import momento1 from '../assets/Botones/momento1.png';
import momento2 from '../assets/Botones/momento2.png';
import momento3 from '../assets/Botones/momento3.png';
import momento4 from '../assets/Botones/momento4.png';
import fbutton from '../assets/Botones/boton futuro.png';
import pbutton from '../assets/Botones/boton pasado.png';
export default function TimeMachine() {

return (
    <div id='back-machine' className=' container-fluid'>
    <div id="carouselExample" className="carousel slide d-flex container-fluid">
  <div className="carousel-inner">
    <div className="carousel-item text-center active" id='item-carousel'>
      <p className='text-white text-photo'>Raíces</p>
     <a href="/momento1"> <img src={momento1} className=" item-img " alt="..."/></a>
    </div>
    <div className="carousel-item text-center">
    <p className='text-white text-photo'>Frutos cosechados</p>
      <a href="/momento2"><img src={momento2} className="momento2-img" alt="..."/></a>
    </div>
    <div className="carousel-item momento">
    <p className='text-white text-photo'>Descifrando el código</p>
     <a href="/momento3"> <img src={momento3} className=" item-img " alt="..."/></a>
    </div>
    <div className="carousel-item text-center ">
    <p className='text-white text-photo'>Recolecta tus frutos</p>
      <a href="/momento4"><img src={momento4} className="item-img " alt="..."/></a>
    </div>
  
</div>
</div>
<div className="row button-row d-flex container-fluid">
  <div className="col-6 button-past">
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <img src={pbutton} alt="" />
  </button>
  </div>
  <div className="col-6 button-future">
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <img src={fbutton} alt="" />
  </button>
  </div>
</div>
</div>
  );
}

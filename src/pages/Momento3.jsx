import '../css/momento1.css'
import img1 from '../assets/Botones/tema.png'
import img2 from '../assets/Botones/tema2.png' 
import img3 from '../assets/Botones/tema3.png' 
import img4 from '../assets/Botones/tema4.png' 
export default function Momento3() {
  return (
    <div className="background-momento">
    <div className="row text-center container-fluid">
      <div className="col-2">
        <a href="/Time-machine" className='back' ><p className='mt-4 text-back'><i className="bi bi-arrow-bar-left"></i> Volver atrás </p>
      </a></div>
      <div className="col-10"></div>
    <h2 className='text-white tittle'>Descifrando el código</h2>
    </div>
    <div className="row row-theme container-fluid">
      <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175730" target='_blank'>
        <img src={img1} className="img-theme1" alt="tema-1" />
        <p className='text-white'>Codificaciones</p>
        </a>
      </div>
      
      <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175666" target='_blank'>
     
      <img src={img4} className="img-theme2" alt="tema-1" />
        <p className='text-white'>Carbonatos y Ciel</p>
        </a>
      </div>
      <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175730" target='_blank'>
        <img src={img3} className="img-theme3" alt="tema-1" />
     
        <p className='text-white'>Codificaciones</p>
        </a>
      </div>
      <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175854" target='_blank'>
        <img src={img2} className="img-theme4" alt="tema-1" />
        <p className='text-white'>Santa Clara</p>
        </a>
      </div>
      <div className='row row-theme'>
       <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175730" target='_blank'> 
        <img src={img2} className="img-theme4" alt="tema-1" />
        <p className='text-white'>Codificaciones</p>
        </a>
      </div>
      <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175740" target='_blank'>
        <img src={img3} className="img-theme3" alt="tema-1" />
        <p className='text-white'>IEQSA</p>
        </a>
      </div>
      <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=176292" target='_blank'>
        <img src={img4} className="img-theme2" alt="tema-1" />
        <p className='text-white'>Quejas</p>
        </a>
      </div>
      <div className="col-3 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175667" target='_blank'>
        <img src={img1} className="img-theme1" alt="tema-1" />
        <p className='text-white'>Cafetera Keurig</p>
        </a>
      </div>
      </div>
      
    </div>
  </div>
  )
}

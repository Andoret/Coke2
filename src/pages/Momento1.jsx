import '../css/momento1.css'
import img1 from '../assets/Botones/tema.png'
import img2 from '../assets/Botones/tema2.png' 
import img3 from '../assets/Botones/tema3.png' 
import img4 from '../assets/Botones/tema4.png' 
export default function Momento1() {
  
  return (
    <div className="background-momento">
      <div className="row text-center container-fluid">
        <div className="col-2">
          <a href="/Time-machine" className='back' ><p className='mt-4 text-back'><i className="bi bi-arrow-bar-left"></i> Volver atrás </p>
        </a></div>
      <h2 className='text-white tittle'>Raíces</h2>
      </div>
      <div className="row row-theme container-fluid">
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/course/view.php?id=4445" target='_blank'>
          <img src={img1} className="img-theme1" alt="tema-1" />
          <p className='text-white'>Bienvenida</p>
          </a>
        </div>
        
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175662" target='_blank'>
        <img src={img4} className="img-theme2" alt="tema-1" />
          <p className='text-white'>Expectativas y evaluación diágnostica </p>
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175689" target='_blank'>
        <img src={img3} className="img-theme3" alt="tema-1" />
          <p className='text-white'>Historia</p>
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175664" target='_blank'>
        <img src={img2} className="img-theme4" alt="tema-1" />
          <p className='text-white'>Inducción corporativa</p>
          </a>
        </div>
        <div className='row row-theme'>
         <div className="col-4 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175670" target='_blank'> 
         <img src={img1} className="img-theme1" alt="tema-1" />
          <p className='text-white'>Inducción hola Coca-Cola</p>
          </a>
        </div>
        <div className="col-4 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175717" target='_blank'>
        <img src={img4} className="img-theme2" alt="tema-1" />
          <p className='text-white'>Inducción al sistema</p>
          </a>
        </div>
        <div className="col-4 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175992" target='_blank'>
        <img src={img3} className="img-theme3" alt="tema-1" />
          <p className='text-white'>Procesos de elaboración</p>
          </a>
        </div>
        </div>
        
      </div>
    </div>
  )
}

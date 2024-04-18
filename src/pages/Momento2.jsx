import '../css/momento1.css'
import img1 from '../assets/Botones/tema.png'
import img2 from '../assets/Botones/tema2.png' 
import img3 from '../assets/Botones/tema3.png' 
import img4 from '../assets/Botones/tema4.png' 
export default function Momento2() {
  return (
    <div className="background-momento">
      <div className="row text-center container-fluid">
        <div className="col-2">
          <a href="/Time-machine" className='back' ><p className='mt-4 text-back'><i className="bi bi-arrow-bar-left"></i> Volver atrás </p>
        </a></div>
      <h2 className='text-white tittle'>Frutos Cosechados</h2>
      </div>
      <div className="row row-theme container-fluid">
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=176007" target='_blank'>
          <img src={img1} className="img-theme1" alt="tema-1" />
          <p className='text-white'>Ingredientes</p>
          </a>
        </div>
        
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=176351" target='_blank'>
        <img src={img2} className="img-theme4" alt="tema-1" />
          <p className='text-white'>Jugos del Valle</p>
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=176226" target='_blank'>
        <img src={img4} className="img-theme2" alt="tema-1" />
          <p className='text-white'>Santa Clara</p>
          </a>
        </div>
        <div className="col-3 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=176382&forceview=1" target='_blank'>
        <img src={img3} className="img-theme3" alt="tema-1" />
          <p className='text-white'>AdeS</p>
          </a>
        </div>
        <div className='row row-theme'>
         <div className="col-4 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175718" target='_blank'> 
         <img src={img1} className="img-theme1" alt="tema-1" />
          <p className='text-white'>Directorio</p>
          </a>
        </div>
        <div className="col-4 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175671" target='_blank'>
        <img src={img4} className="img-theme2" alt="tema-1" />
          <p className='text-white'>Patrocinio FEMSA</p>
          </a>
        </div>
        <div className="col-4 text-center">
          <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175665" target='_blank'>
          <img src={img2} className="img-theme4" alt="tema-1" />
          <p className='text-white'>Visita a la planta</p>
          </a>
        </div>
        </div>
        
      </div>
    </div>
  )
}

import '../css/momento1.css'
import img1 from '../assets/Botones/tema.png'
import img3 from '../assets/Botones/tema3.png' 
import img4 from '../assets/Botones/tema4.png' 
export default function Momento4() {
  return (
    <div className="background-momento">
    <div className="row text-center container-fluid">
      <div className="col-2">
        <a href="/Time-machine" className='back' ><p className='mt-4 text-back'><i className="bi bi-arrow-bar-left"></i> Volver atrás </p>
      </a></div>
      <div className="col-10"></div>
    <h2 className='text-white tittle'>Recolecta tus frutos</h2>
    </div>
    <div className="row row-momento-4 container-fluid ">
      <div className="col-4 text-center">
        <a href="https://elearningfactory.com.co/mod/hvp/view.php?id=175819" target='_blank'>
        <img src={img1} className="img-theme1" alt="tema-1" />
        <p className='text-white'>Módulo evaluativo</p>
        </a>
      </div>
      
      <div className="col-4 text-center">
        <a href="https://elearningfactory.com.co/mod/feedback/view.php?id=175769" target='_blank'>
     
      <img src={img4} className="img-theme2" alt="tema-1" />
        <p className='text-white'>Encuesta de satisfacción</p>
        </a>
      </div>
      <div className="col-4 text-center">
        <a href="https://elearningfactory.com.co/mod/customcert/view.php?id=175867" target='_blank'>
        <img src={img3} className="img-theme3" alt="tema-1" />
     
        <p className='text-white'>Certificado</p>
        </a>
      </div>
      
      
    </div>
  </div>
  )
}

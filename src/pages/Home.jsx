import '../css/home.css'
import logo from '../assets/Botones/Slide1.png';
import machine from '../assets/Botones/slide3.png';
import joinSign from  '../assets/Botones/slide3-2.png';
import fBd1 from '../assets/Gif/Estructura-GIF_1.gif';
import fBd2 from '../assets/Gif/Estructura-GIF_2.gif';
import fBd3 from '../assets/Gif/Estructura-GIF_3.gif';
import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        reloadBackground();
        setTimeout(() => {
          removeBackground("back1");
          disHomeearLogo();
          },2000);

          setTimeout(() => {
            background2();
          }, 4000); 
    }, [])

    const reloadBackground = () => {
        const background = document.getElementById("back1");
        const background2=document.getElementById("back2");
        background2.style.display="none";
        background.style.backgroundImage = `url(${fBd1})`;
        
    }

    const disHomeearLogo = () => {
        const logo = document.getElementById("coke-logo");
        if (logo) {
            setTimeout(() => {
                logo.classList.add=("fade-out")
                logo.style.display = "none";
            }, 2000);
        }
    }

    const removeBackground = (className) => {
        const background = document.getElementById(className);
        background.classList.add("fade-out");
        setTimeout(() => {
            background.style.display = "none";
        }, 2000);
    }

    const background2 = () => {
        const background1=document.getElementById("back1");
        const background2 = document.getElementById("back2");
        const welcome=document.getElementById("welcome-poster");
        const textWelcome=document.getElementById("welcome-text");
        background2.style.backgroundImage = `url(${fBd2})`;
        welcome.classList.add("circle");
        textWelcome.style.display="block";
        background1.classList.add("fade-out");
        background2.classList.add("fade-in");
        background2.style.display = "block";
        setTimeout(() => {
          removeBackground("back2");
          background3();
        }, 4000);
    }
    const background3 = () => {
      const background2=document.getElementById("back2");
      const background3 = document.getElementById("back3");
      const welcome=document.getElementById("welcome-poster");
      const textWelcome=document.getElementById("welcome-text")
      const joinSign=document.getElementById("welcome-poster");
      background3.style.backgroundImage = `url(${fBd3})`;
      joinSign.style.display="block";
      background2.style.display="none";
      welcome.style.display="none";
      background3.classList.add("fade-in");
      textWelcome.style.display="none";
      background3.style.display = "block";

  }
    return (
        <div className='background'>
               <div className="text-center" id='back1'>
                <img src={logo} alt="Coke-logo" id="coke-logo" />
              </div>
              <div id='back2'>
              <div className="text-center" id='welcome-poster'>
                <p className='text-white'id='welcome-text'>Bienvenidos al curso de Coca-Cola México</p>
              </div>
              </div>
              <div className="text-center" id="back3">
              <div className=" d-flex justify-content-center align-items-center">
        <div id="time-machine" className="align-self-end">
          <a href="/Time-machine"> <img src={machine} alt="maquina del tiempo" id='time-machine-img' /></a>
          
        </div>
        <div id='joinSign' className='d-flex align-items-center justify-content-end'>
        <img src={joinSign} alt="Entra en la máquina del tiempo para comenzar" />
        </div>
            </div>
            </div>
        </div>
    )
}

export default Home;

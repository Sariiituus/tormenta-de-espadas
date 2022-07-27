import "./Info.scss";

import React from "react";

const Info = (props) => {
  const { datos } = props;

  return (

    <div className='content-wrapper'>

      <div className='title'>
          { datos.titulo }
        </div>

      <div className="info-wrapper">

        <div className='description'>
          <p>{ datos.parrafoUno }</p>
          <p>{ datos.parrafoDos }</p>
          <p>{ datos.parrafoTres }</p>
          <p>{ datos.parrafoCuatro }</p>
        </div>

        <div className='map'>

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.462090676946!2d-1.651578584815165!3d42.48172783540235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5a771683921c8d%3A0x25ce4904b49ea416!2sPalacio%20Real%20de%20Olite!5e0!3m2!1ses!2ses!4v1658587558341!5m2!1ses!2ses'
            width='400'
            height='300'
            allowfullscreen=''
            loading='lazy'
            title='Mapa'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        
        </div>

      </div>
      
      <div className='calendar-wrapper'>

        <div className="left-shiedls">
          <img className='shield' src='./assets/icons/Deer-shield.png' alt="" />
          <img className='shield' src='./assets/icons/Wolf-shield.png' alt="" />
        </div>

        <div className="title-and-btn">
          <div className="calendar-title">
              <h4>Calendario de actividades</h4>
          </div>
          
          <a className="calendar-btn" download href='/assets/Actividades-TDE.pdf' role="button">
          <button class="button-6" role="button">Descargar</button>
          </a>
        </div>

        <div className="right-shields">
          <img className='shield' src='./assets/icons/Squid-shield.png' alt="" />
          <img className='shield' src='./assets/icons/Lion-shield.png' alt="" />
        </div>

      </div>

    </div>
  );
};

export default Info;

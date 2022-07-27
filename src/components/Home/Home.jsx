import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const { datos } = props;

  let navigate = useNavigate();

  return (
    <div className='text-wrapper'>
      <h1 className='titulo'>{datos.titulo}</h1>

      <img src='./assets/icons/logo-white-bg.svg' alt='' />

      <div className='info-wrapper'>
        <p className='parrafoUno'>{datos.parrafoUno}</p>
      </div>

      <button
        className='button-6'
        onClick={() => navigate("/info")}>
        ¡Comienza tu aventura!
      </button>
    </div>
  );
};

export default Home;

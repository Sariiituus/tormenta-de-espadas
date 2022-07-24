import React from 'react'
import './Home.scss'

const Home = (props) => {
  const { datos } = props;
  return (
    
    <div className='text-wrapper'>
      
      <h1 className='titulo'>{ datos.titulo }</h1>
      
      <div className='info-wrapper'>
        <p className='parrafoUno'>{ datos.parrafoUno }</p>
      </div>

      <button class="button-6" role="button">¡Comienza tu aventura!</button>
      
    </div>
    
    

  )
}

export default Home
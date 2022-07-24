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
      
    </div>

  )
}

export default Home
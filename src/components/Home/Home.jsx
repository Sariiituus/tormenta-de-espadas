import React from 'react'

const Home = (props) => {
  const { datos } = props;
  return (
    <div>
      <h1>{ datos.titulo }</h1>
      <p>{ datos.parrafoUno }</p>
      <p>{ datos.parrafoDos }</p>
    </div>
  )
}

export default Home
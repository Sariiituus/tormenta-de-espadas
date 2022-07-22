import React from 'react'

const Home = (props) => {
  const { datos } = props;
  return (
    <div>
      <div>{ datos.titulo }</div>
      <p>{ datos.parrafoUno }</p>
      <p>{ datos.parrafoDos }</p>
    </div>
  )
}

export default Home
import './Info.scss'

import React from 'react'

const Info = (props) => {

    const { datos } = props;

    return (
        <div>
            <div>Info</div>
            <div>Nombre: { datos.nombre }</div>
            <div>Bootcamp: { datos.bootcamp }</div>
        </div>
    )
}

export default Info
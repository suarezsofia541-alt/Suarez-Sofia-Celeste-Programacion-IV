import { useState } from 'react'

const Project = ({nombre,descripcion,tecnologias,img}) => {
    const [VerMas,setVerMas]=useState(false) 


    return(
        <div>
            {VerMas ? (
                <div>
                    <h4>{nombre}</h4>
                    <p>Descripcion: {descripcion}</p>
                    <p>Tecnologias: {tecnologias}</p>
                    <button onClick={() => setVerMas(false)}>ver menos</button>
                </div>
                ) : (
                <div>
                    <h4>{img}</h4>
                    <h4>{nombre}</h4>
                    <button onClick={() => setVerMas(true)}>ver mas</button>
                </div>
            )}
        </div>
    )
}

export default Project
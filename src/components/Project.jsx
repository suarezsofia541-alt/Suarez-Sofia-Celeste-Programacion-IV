import { useState } from 'react'

const Project = ({nombre,descripcion,tecnologias,img}) => {
    const [VerMas,setVerMas]=useState(false) 


    return(
        <div className="projectCard">
            {VerMas ? (
                <div className="projectInfo">
                    <h4>{nombre}</h4>
                    <p>Descripcion: {descripcion}</p>
                    <p>Tecnologias: {tecnologias}</p>
                    <button className="btnVerMas" onClick={() => setVerMas(false)}>ver menos</button>
                </div>
                ) : (
                <div className="projectPreview">
                    <img src={img} alt={nombre}/>
                    <h4>{nombre}</h4>
                    <button className="btnVerMas" onClick={() => setVerMas(true)}>ver mas</button>
                </div>
            )}
        </div>
    )
}

export default Project
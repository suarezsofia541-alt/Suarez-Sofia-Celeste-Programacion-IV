import Skill from './Skill'

const Skills = () => {
    const habilidades = [
        { id: 1, nombre: "C#", img:"img"},
        { id: 2, nombre: "JavaScript", img:"img"},
        { id: 3, nombre: "MySQL", img:"img"},
        { id: 4, nombre: "React", img:"img"},
        { id: 5, nombre: "HTML", img:"img"},
        { id: 6, nombre: "CSS", img:"img"}
    ];

    return(
        <div id="skills">
            <h2>Habilidades</h2>
            <div>
                {habilidades.map((habilidad) => (
                    <div key={habilidad.id}>
                        <Skill nombre={habilidad.nombre} img={habilidad.img}/>
                    </div>
                ))}  
            </div>
        </div>
    )
}

export default Skills
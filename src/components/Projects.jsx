import Project from './Project'

const Projects = () => {
    const proyectos = [
        {id:1, nombre:"TurnoFácil", descripcion:"Sistema web para gestionar turnos de clientes. Permite registrar clientes, consultar horarios disponibles y organizar las reservas.", tecnologias:"C#, HTML, CSS, JavaScript, MySQL.", img:"img"},
        {id:2, nombre:"ShopNow", descripcion:"Tienda online donde los usuarios pueden ver productos, consultar precios y realizar pedidos de forma sencilla.", tecnologias:"C#, HTML, CSS, JavaScript, MySQL.", img:"img"},
        {id:3, nombre:"TaskManager", descripcion:"Aplicación web para organizar tareas. Permite agregar, editar, eliminar y marcar tareas como completadas.", tecnologias:"C#, HTML, CSS, JavaScript, MySQL.", img:"img"}
    ]

    return(
        <div id="projects">
            <h2>Proyectos</h2>
            <div>
               {proyectos.map((proyecto) => (
                    <div key={proyecto.id}>
                        <Project nombre={proyecto.nombre} descripcion={proyecto.descripcion} tecnologias={proyecto.tecnologias} img={proyecto.img}/>
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default Projects
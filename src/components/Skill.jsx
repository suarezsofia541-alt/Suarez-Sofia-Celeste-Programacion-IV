const Skill = ({nombre, img}) => {
    return(
        <div className="skill">
            <h4>{nombre}</h4>
            <img src={img} alt={nombre}/>
        </div>
    )
}

export default Skill
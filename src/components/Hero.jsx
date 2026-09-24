import '../CSS/Hero.css'
import fotoperfil from '../assets/imgperfil/FotoPerfil.jpeg'

const Hero = () => {
    return(
        <div className="containerHero">
            <div className="infoHero">
                <h4>Sofia Celeste Suarez</h4>
                <h5>Estudiante de Programación. </h5>
                <h6>Me interesa el desarrollo web y aprender nuevas tecnologías.</h6> 
            </div>
            
            <div>
                <img src={fotoperfil} alt='imagen de sofia celeste suarez' className='imgPerfil'/>
            </div>
        </div>
    )
}

export default Hero
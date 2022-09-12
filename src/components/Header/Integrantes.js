import '../../stylesheets/Header/Integrantes.css';
import javi from '../../images/Header/javi.png';
import rolo from '../../images/Header/rolo.png';
import mati from '../../images/Header/mati.png';
import seba from '../../images/Header/seba.png';
const Integrantes = () =>{
    return(
        <div className="container-integrantes">
            <ul>
                <a href='https://www.linkedin.com/in/javieremanuelhuebra/' target='_blank'><li><img src={javi}/>Javier Huebra</li></a> 
                <a href='https://www.linkedin.com/in/rolando-ramon-duarte-93116b17a/' target='_blank'><li><img src={rolo}/>Javier Huebra</li></a> 
                <a href='https://www.linkedin.com/in/matias-spirilis/' target='_blank'><li><img src={mati}/>Javier Huebra</li></a> 
                <a href='https://www.linkedin.com/in/sebadalessandro/' target='_blank'><li><img src={seba}/>Javier Huebra</li></a> 
            </ul>
        </div>
    )
}

export default Integrantes;
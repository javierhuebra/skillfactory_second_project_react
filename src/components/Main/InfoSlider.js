import '../../stylesheets/Main/InfoSlider.css'
import { Link } from 'react-router-dom';

const InfoSlider = ({ title, info, image, btnText, route }) =>{
    return(
        <div className="container-info-total">
            <div className='cont cont-left'>
                <h2>{title}</h2>
                <div className='info-small'>
                    <p>{info}</p>
                    <img src={image} alt='Texto para mostrar si no anda la img'/>
                </div>
            </div>
            <div className='cont cont-right'>
                <Link to={route}><button>{btnText}</button></Link>
            </div>
            
        </div>
    )
}
export default InfoSlider;
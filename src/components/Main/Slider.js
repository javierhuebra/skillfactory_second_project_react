import '../../stylesheets/Main/Slider.css';
import imagen_prueba from '../../images/Main/ricky.png';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import InfoSlider from './InfoSlider';
const Slider = () => {
    return(
        <div className='container-slider'>
            <div className='circles-container'>
                <div className='circle circle-1'></div>
                <div className='circle circle-2'></div>
                <div className='circle circle-3'></div>
            </div>
            <div className='arrow left'><p><FaArrowCircleLeft/></p></div>
            <div className='arrow right'><p><FaArrowCircleRight/></p></div>
        <div className="view-port-slider">
            <div className="container-images">
                <div className="image-1 component-slider">
                    <InfoSlider
                        title={'Rick & Morty'}
                        info={'A complete list of Rick and Morty characters fetched from Rick and Morty API.'}
                        btnText={'ENTER'}
                        image={imagen_prueba}/>
                </div>
                <div className="image-2 component-slider"></div>
                <div className="image-3 component-slider"></div>
            </div>
            
        </div>
        </div>
    )
}

export default Slider;
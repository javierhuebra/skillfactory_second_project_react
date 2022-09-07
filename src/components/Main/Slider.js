import '../../stylesheets/Main/Slider.css';
import imagen_prueba from '../../images/Main/ricky.png';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import InfoSlider from './InfoSlider';
import { useState } from 'react';

const Slider = () => {


    const [section, setSection] = useState(0);

    const rightMove = () => {
        section===2 ? setSection(0) : setSection(section+1);
    }

    const leftMove = () => {
        section===0 ? setSection(2) : setSection(section-1);
    }


    return(
        <div className='container-slider'>
            <div className='circles-container'>
                <div className={`circle circle-1 ${section===0 ? 'circulo-suave' : ''}`}></div>
                <div className={`circle circle-2 ${section===1 ? 'circulo-suave' : ''}`}></div>
                <div className={`circle circle-3 ${section===2 ? 'circulo-suave' : ''}`}></div>
            </div>
            <div className='arrow left' onClick={()=> leftMove()}><p><FaArrowCircleLeft/></p></div>
            <div className='arrow right' onClick={()=> rightMove()}><p><FaArrowCircleRight/></p></div>
        <div className="view-port-slider">

            <div className={`container-images ${section===0 ? 'pos-0' : (section===1 ? 'pos-1' : 'pos-2')}`}>
                <div className="image-1 component-slider">
                    <InfoSlider
                        title={'Rick & Morty'}
                        info={'A complete list of Rick and Morty characters fetched from Rick and Morty API.'}
                        btnText={'ENTER'}
                        image={imagen_prueba}
                        route={'/characters-rick-morty'}
                    />
                </div>
                <div className="image-2 component-slider">
                    <InfoSlider
                        title={'Rick & Morty'}
                        info={'A complete list of Rick and Morty characters fetched from Rick and Morty API.'}
                        btnText={'ENTER'}
                        image={imagen_prueba}
                        route={'/posicion-1'}
                    />
                </div>
                <div className="image-3 component-slider">
                    <InfoSlider
                        title={'Rick & Morty'}
                        info={'A complete list of Rick and Morty characters fetched from Rick and Morty API.'}
                        btnText={'ENTER'}
                        image={imagen_prueba}
                        route={'/posicion-2'}
                    />
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Slider;
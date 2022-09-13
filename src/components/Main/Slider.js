import '../../stylesheets/Main/Slider.css';
import imagen_rick from '../../images/Main/primerarick.png';
import imagen_form from '../../images/Main/formu.png';
import imagen_usuarios from '../../images/Main/usuarioslista.png';
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import InfoSlider from './InfoSlider';
import { useState } from 'react';
import Modal from './Modal';
import MyPages from './MyPages';

const Slider = () => {


    const [section, setSection] = useState(0);

    const rightMove = () => {
        section===2 ? setSection(0) : setSection(section+1);
    }

    const leftMove = () => {
        section===0 ? setSection(2) : setSection(section-1);
    }


    return(
        <div>
            <Modal/>
            <MyPages/>
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
                        image={imagen_rick}
                        route={'/characters-rick-morty'}
                    />
                </div>
                <div className="image-2 component-slider">
                    <InfoSlider
                        title={'Users fetched from API'}
                        info={'A list of users fetched from jsonplaceholder to display here!'}
                        btnText={'ENTER'}
                        image={imagen_usuarios}
                        route={'/users-list'}
                    />
                </div>
                <div className="image-3 component-slider">
                    <InfoSlider
                        title={'Contact Us!'}
                        info={'A form to contact with our products, people and services(?'}
                        btnText={'ENTER'}
                        image={imagen_form}
                        route={'/form'}
                    />
                </div>
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default Slider;
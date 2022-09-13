import '../../stylesheets/Main/Modal.css';
import { useState } from 'react';
const Modal = () => {
    const [modal, setModal] = useState(false);

    return(
        <div onClick={()=>setModal(true)}  className={`modal-container ${modal==true ? 'close' : ''}`}>
            <div className='info-cont-modal'>
                <h2>Skill factory project number 2: Migration from <a href='https://javierhuebra.github.io/skill_factory_first_project_js/' target={'_blank'}><span className='js-color'>previous project</span></a> to <span className='react-color'>React</span></h2>
                <button  className='modal-btn'>YAS!</button>
            </div>
            
        </div>
    )
}

export default Modal;
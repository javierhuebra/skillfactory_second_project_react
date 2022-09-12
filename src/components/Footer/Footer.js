import '../../stylesheets/Footer/Footer.css';
import { FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import imagenSkill from '../../images/Main/skill.png';
import { BsMailbox} from "react-icons/bs";
const Footer = () => {
    return(
        <div className="footer-container">
            <div>
                <p><FaMapMarkerAlt/>Bahía Blanca | Buenos Aires CP: 8000</p>
                <p>Javier Emanuel Huebra</p>
                <p>Skill Factory | By Avalith</p>
            </div>
            <div>
            <a href='https://github.com/javierhuebra' target='_blank' className='clickable'><p><FaGithub/>gitHub</p></a>
            <a href='https://www.linkedin.com/in/javieremanuelhuebra/' target='_blank' className='clickable'><p><FaLinkedin/>Linkedin</p></a>
            <p><BsMailbox/>javieremanuelhuebra@gmail.com</p>
            </div>
            <a href='https://www.avalith.net/' target={'_blank'}><img src={imagenSkill}/></a>
        </div>
    )
}

export default Footer;
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
            <a href='https://javierhuebra.github.io/skill_factory_first_project_js/'><p><FaGithub/>gitHub</p></a>
            <a href='https://javierhuebra.github.io/skill_factory_first_project_js/'><p><FaLinkedin/>Linkedin</p></a>
            <a href='https://javierhuebra.github.io/skill_factory_first_project_js/'><p><BsMailbox/>javieremanuelhuebra@gmail.com</p></a>
            </div>
            <a href='https://javierhuebra.github.io/skill_factory_first_project_js/'><img src={imagenSkill}/></a>
        </div>
    )
}

export default Footer;
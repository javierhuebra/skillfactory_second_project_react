import Logo from '../Header/Logo';
import srcLogo from '../../images/Header/logo.png';
import '../../stylesheets/Header/Header.css'
import Group from '../Header/Group';
import Integrantes from '../Header/Integrantes';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className="header-container">
            <Link to='/'><Logo urlLogo={srcLogo}/></Link>
            <Group/>
            <Integrantes/>
        </div>
    )
}

export default Header;
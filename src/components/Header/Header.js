import Logo from '../Header/Logo';
import srcLogo from '../../images/Header/logo.png';
import '../../stylesheets/Header/Header.css'
import Group from '../Header/Group';
import Integrantes from '../Header/Integrantes';
const Header = () => {
    return(
        <div className="header-container">
            <Logo urlLogo={srcLogo}/>
            <Group/>
            <Integrantes/>
        </div>
    )
}

export default Header;
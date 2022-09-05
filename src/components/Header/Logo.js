import '../../stylesheets/Header/Logo.css';

const Logo = ({urlLogo}) => {
    return (
        <div className="container-logo">
            <img src={urlLogo}
            alt='Logo de la web, rick morty, form'/>
            <h1>= Second Project!</h1>
        </div>
    )
}

export default Logo;
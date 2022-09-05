import '../../stylesheets/Main/InfoSlider.css'
const InfoSlider = ({ title, info, image, btnText }) =>{
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
                <button>{btnText}</button>
            </div>
            
        </div>
    )
}
export default InfoSlider;
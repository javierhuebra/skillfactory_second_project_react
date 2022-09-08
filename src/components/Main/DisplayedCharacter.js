import '../../stylesheets/Main/DisplayedCharacter.css';
import televisionImg from '../../images/Main/tvinter.png';
import ruidoImg from '../../images/Main/ruido.gif';
const DisplayedCharacter = ({idChar, characters }) =>{

    if(idChar){
        let character = characters.filter((character)=>character.id==idChar);
        console.log("el arreglo filtrado: ",character);
    
    
    return <>
        <div className="container-displayed-char">
        <img className='tv' src={televisionImg}/>
            <div className='pantalla-tv'>
                <div className='encabezado'>
                    <img className='img-view' src={character[0].image}/>
                    <div className='encabezado-info'>
                        <h2>{character[0].name}</h2>
                        <p>id</p>
                        <p>dsadas</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </>
    }else{
        console.log("no existe ids")
        return <>
        <div className="container-displayed-char">
            <img className='tv' src={televisionImg}/>
            <div className='pantalla-tv apagado'>
                <img className='ruido' src={ruidoImg}/>
            </div>
        </div>
    </>
    }
}

export default DisplayedCharacter;
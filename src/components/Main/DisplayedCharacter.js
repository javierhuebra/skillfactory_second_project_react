import '../../stylesheets/Main/DisplayedCharacter.css';
import televisionImg from '../../images/Main/tvinter.png';
import ruidoImg from '../../images/Main/ruido.gif';
const DisplayedCharacter = ({idChar, characters }) =>{

    if(idChar){
        let character = characters.filter((character)=>character.id==idChar);
        console.log("el arreglo filtrado: ",character);
        let episodes=0;
    
    return <>
        <div className="container-displayed-char">
        <img className='tv' src={televisionImg}/>
            <div className='pantalla-tv'>
                <div className='encabezado'>
                    <img className='img-view' src={character[0].image}/>
                    <div className='encabezado-info'>
                        <h2>{character[0].name}</h2>
                        <p><span>Id:</span> {character[0].id}</p>
                        <p><span>Status:</span> {character[0].status}</p>
                        <p><span>Species:</span> {character[0].species}</p>
                        <p><span>Gender:</span> {character[0].gender}</p>
                        <p><span>Origin:</span> {character[0].origin.name}</p>
                        <p><span>Location:</span> {character[0].location.name}</p>
                        {character[0].episode.map((ep)=>{
                            episodes++;
                        })}
                        <p><span>Participation in episodes:</span> {episodes}</p>
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
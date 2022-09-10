import '../../stylesheets/Main/Character.css';
import { Link, useParams } from 'react-router-dom';

const Character = ({image, name, status, id}) =>{
   
    return (
        <div className="card-character">
            <div className='contenedor-img-luz'>
                <img className='img-character' src={image} alt="character rick and morty"/>
                <div className={`luz-testigo ${status=='Alive' ? 'alive': (status=='Dead' ? 'dead' : 'unknown') }`}></div>
                <div className='id-character'>{id}</div>
            </div>
            
            <div className="card-text-container">
                <h2>{name}</h2>
                
                
            <Link to={`/characters-rick-morty/${id}`}><button className='btn-rickydex'>View on RickyDex</button></Link>
                
                
            </div>
        </div>
    )
}

export default Character;
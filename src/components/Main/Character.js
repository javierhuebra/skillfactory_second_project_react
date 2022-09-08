import '../../stylesheets/Main/Character.css';
import { Link, useParams } from 'react-router-dom';

const Character = ({image, name, status, id}) =>{
   
    return (
        <div className="card-character">
            <img src={image} alt="character rick and morty"/>
            <div className="card-text-container">
                <h2>{name}</h2>
                <p>{status}</p>
                <p>{id}</p>
                <Link to={`/characters-rick-morty/${id}`}><button>View on RickyDex</button></Link>
            </div>
        </div>
    )
}

export default Character;
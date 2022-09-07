import '../../stylesheets/Main/Character.css';
const Character = ({image, name, status, id}) =>{

    return (
        <div className="card-character">
            <img src={image} alt="character rick and morty"/>
            <div className="card-text-container">
                <h2>{name}</h2>
                <p>{status}</p>
                <p>{id}</p>
                <button>View on RickyDex</button>
            </div>
        </div>
    )
}

export default Character;
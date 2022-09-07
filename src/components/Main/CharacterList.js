import Character from "./Character";
import '../../stylesheets/Main/CharacterList.css';
const CharacterList = ({ characters }) => {
    console.log("characters en characterlist", characters);

    return(
        <div className="character-list">
            {
                characters.map((character, index) =>{
                    return (
                    <Character
                        key={index}
                        name={character.name}
                        status={character.status}
                        id={character.id}
                        image={character.image}
                    />);
                })
            }
        </div>
    );  
}

export default CharacterList;
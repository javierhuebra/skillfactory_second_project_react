import '../../stylesheets/Main/RickMorty.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import { useParams, Link } from 'react-router-dom';
import DisplayedCharacter from './DisplayedCharacter';

const RickMorty = () =>{
    
    let  { id }    = useParams([]);
    
    console.log("useparams: ", id);

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    const getCharactersFromApi = async () => {
        try{
            const getAxios = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            /* console.log("get axios::",getAxios); */
            setCharacters(getAxios.data.results);
            /* console.log("data::", getAxios.data);
            console.log("characters::",characters); */
        }catch(err){
            console.error(err.name,err.message);
        }
    }

    useEffect(() =>{
        getCharactersFromApi();
        console.log(page);
    },[page]);
    
    
    return (
        <div className="container-rick-morty">
            <div className='cuadro-left'> 
            
            <DisplayedCharacter
                idChar={id}
                characters={characters}
            />
          
        
           
            </div>
            <div className='container-cuadro-right'>
                <div className='cuadro-right'>  
                       
                <CharacterList characters={characters}/>
                  {console.log(characters)} 
                </div>
                <div className='container-buttons'>
                    <Link to={`/characters-rick-morty`}><button className='btn-page' onClick={() => page==1 ? setPage(42) : setPage(page-1)}>Previous</button></Link>
                    <div className='num-pag'>{page}</div>
                    <Link to={`/characters-rick-morty`}><button className='btn-page' onClick={() => page==42 ? setPage(1) : setPage(page+1)}>Next</button></Link>
                </div>
            </div>
            
        </div>
    )
}

export default RickMorty;
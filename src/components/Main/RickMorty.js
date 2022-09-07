import '../../stylesheets/Main/RickMorty.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';

const RickMorty = () =>{

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
            <div className='cuadro-left'></div>
            <div className='container-cuadro-right'>
                <div className='cuadro-right'>  
                       
                <CharacterList characters={characters}/>
                   
                </div>
                <div className='container-buttons'>
                    <button onClick={() => page==1 ? setPage(42) : setPage(page-1)}>Previus</button>
                    <div className='num-pag'>{page}</div>
                    <button onClick={() => page==42 ? setPage(1) : setPage(page+1)}>Next</button>
                </div>
            </div>
            
        </div>
    )
}

export default RickMorty;
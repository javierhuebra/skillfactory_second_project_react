import '../../stylesheets/Main/Main.css'
import Slider from './Slider';
import RickMorty from './RickMorty';
import { Route, Routes } from 'react-router-dom';
const Main = () => {
    return(
        <div className="main-container">
            <Routes>
                <Route path='/' element={<Slider/>}/>
                <Route path='/characters-rick-morty' element={<RickMorty/>}/>
                
                
                
            </Routes>     
        </div>
    )
}

export default Main;
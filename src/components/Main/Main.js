import '../../stylesheets/Main/Main.css'
import Slider from './Slider';
import RickMorty from './RickMorty';
import Form from './Form';
import { Route, Routes } from 'react-router-dom';
import UsersList from './UsersList';
const Main = () => {
    return(
        <div className="main-container">
            <Routes>
                <Route path='/' element={<Slider/>}/>
                <Route path='/characters-rick-morty' element={<RickMorty/>}/>
                <Route path='/characters-rick-morty/:id' element={<RickMorty/>}/>  
                <Route path='/form' element={<Form/>}/>
                <Route path='/users-list' element={<UsersList/>}/>
            </Routes>     
        </div>
    )
}

export default Main;